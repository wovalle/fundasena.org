const orNull = (t) => t || null;

const toDataURL = (url, id) =>
  fetch(url, { mode: "no-cors" })
    .then((response) => response.buffer())
    .then((buff) => ({
      img: buff.toString("base64"),
      id,
    }));

export async function getInstagramPosts() {
  const user = "fundasenard";

  const urlVars = JSON.stringify({
    id: "1531897564",
    first: 12,
  });

  const promises = [];
  // const cookie = "35672366%3Ajb1MtfL17kaX0r%3A8";

  const url = `https://www.instagram.com/graphql/query/?query_hash=ea4baf885b60cbf664b34ee760397549&variables=${encodeURIComponent(
    urlVars
  )}`;

  const igPosts = await fetch(url, {
    // headers: {
    //   cookie: `sessionid=${cookie}`,
    // },
  })
    .then((r) => r.json())
    .then((raw) => {
      const posts = raw.data.user.edge_owner_to_timeline_media.edges
        .map(({ node }) => {
          promises.push(toDataURL(node.thumbnail_src, node.id));
          return {
            id: node.id,
            display_url: orNull(node.display_ur),
            display_resources: orNull(node.display_resources),
            is_video: orNull(node.is_video),
            media_preview: node.media_preview,
            video_url: orNull(node.video_url),
            shortcode: orNull(node.shortcode),
            thumbnail_src: orNull(node.thumbnail_src),
            thumbnail_resources: orNull(node.thumbnail_resources),
            caption: orNull(node?.edge_media_to_caption?.edges[0]?.node?.text),
            taken_at_timestamp: orNull(node.taken_at_timestamp),
          };
        })
        .sort((a, b) => b.taken_at_timestamp > a.taken_at_timestamp);

      return {
        posts,
        raw,
      };
    });

  const imageList = await Promise.all(promises);

  const images = imageList.reduce((acc, { img, id }) => {
    acc[id] = img;
    return acc;
  }, {});

  return { ...igPosts, images };
}

export default async function handler(req, res) {
  // const data = await getInstagramPosts();
  // res.status(200).json(data);
}
