export const selectFilterValue = state => state.filter.filter;
export const selectContactValue = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
