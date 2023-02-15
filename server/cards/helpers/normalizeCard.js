const generateBizNumber = require("./generateBizNumber");

const normalizeCard = async (rawCard, userId) => {
  

  const { url, alt } = rawCard.image;
  const image = {
    url:
      url ||
      "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    alt: alt || "Business card image",
  };


  const card ={
    ...rawCard,
    image,
    address: {
      ...rawCard.address,
      state: rawCard.address.state || "not defined",
    },
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: userId,
  };
  return card
};

module.exports = normalizeCard;