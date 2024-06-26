export const getFirstResolvedPromise = (promises) => {
  return Promise.any(promises);

};

export const getFirstPromiseOrFail = (promises) => {
  return Promise.race(promises)
    .then((res) => res);
};

export const getQuantityOfRejectedPromises = (promises) => {
  return Promise.allSettled(promises)
    .then((results) => {

      const rejectedCount = results.filter((result) => result.status === 'rejected').length;
      return rejectedCount;
    });
};

export const getQuantityOfFulfilledPromises = (promises) => {
  return Promise.allSettled(promises)
    .then(results => {
      return results.reduce((count, result) => {
        if (result.status === 'fulfilled') {
          count++;
        }
        return count;
      }, 0);
    });
};
//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  // Use Promise.all to fetch all characters concurrently by their IDs
  const promises = ids.map(id => fetchCharacterById(id));

  // Wait for all promises to resolve and return the results
  try {
    const characters = await Promise.all(promises);
    return characters;
  } catch (error) {
    // Handle any errors that occur during the fetch
    return [];
  }
};
