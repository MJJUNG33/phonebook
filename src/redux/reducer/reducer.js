let initialState = {
  contactList: [],
  searchContact: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_CONTACT":
      const findContact = state.contactList.filter(
        (contact) =>
          contact.name &&
          contact.name.toLowerCase().includes(payload.searchInput.toLowerCase())
      );

      return { ...state, searchContact: findContact };

    default:
      return { ...state };
  }
}

export default reducer;
