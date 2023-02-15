const normalizeUserNoPassword = (user) => ({
    name: {
      first: user.first,
      middle: user.middle,
      last: user.last,
    },
    phone: user.phone,
    email: user.email,
    address: {
      state: user.state,
      country: user.country,
      city: user.city,
      street: user.street,
      houseNumber: user.houseNumber,
      zip: user.zip,
    },
    image: {
      url: user.url,
      alt: user.alt,
    },
    isBusiness: user.isBusiness,
  });
  
  export default normalizeUserNoPassword;
  