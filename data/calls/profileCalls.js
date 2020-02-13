import peopleList from '../../assets/exampleData/exampleListPeople';

export const fetchProfileListOfColleagues = (profileId) => new Promise((resolve) => {
  setTimeout(() => { resolve({ data: peopleList, requestedId: profileId }); }, 1450);
});

export default fetchProfileListOfColleagues;
