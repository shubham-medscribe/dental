import { getValueBykey } from "./utils";

/**
 * Updates React Query cache data by merging new data into a specified key.
 *
 * @param {Record<string, any>} data - The new data to be merged.
 * @param {Record<string, any>} oldData - The current cache data.
 * @param {string} key - The key to update within the cache.
 * @returns {Record<string, any>} - The updated cache data.
 */
function addInCacheHandlerReactQuery(
  data: Record<string, any>,
  oldData: Record<string, any>,
  key: string,
  ace: boolean = true
): Record<string, any> {
  // Extract the data to be added from the response
  let responseAddress = getValueBykey(data, "data");

  // If responseAddress is invalid or not an array, fallback to using data as an array
  if (!responseAddress || !Array.isArray(responseAddress)) {
    responseAddress = [data];
  }

  // Clone the old data to avoid mutation
  const clonedCache = { ...oldData };

  // Ensure the key exists and is an array in the cloned cache
  if (!Array.isArray(clonedCache[key])) {
    clonedCache[key] = [];
  }

  // Append the new data
  if (ace) {
    clonedCache[key] = [...clonedCache[key], ...responseAddress];
  } else {
    clonedCache[key] = [...responseAddress, ...clonedCache[key]];
  }
  return clonedCache;
}

/**
 * Updates a specific item in the React Query cache by matching its `_id`.
 *
 * @param {string} id - The ID of the item to update.
 * @param {Record<string, any>} oldData - The current cache data.
 * @param {Record<string, any>} updatedData - The updated data object to merge.
 * @param {string} key - The key in the cache containing the array to update.
 * @returns {Record<string, any>} - The updated cache data.
 */
function updateInCacheHandlerReactQuery(
  id: string,
  oldData: Record<string, any>,
  updatedData: Record<string, any>,
  key: string
): Record<string, any> {
  // Clone the old cache to avoid mutation
  const clonedCache = { ...oldData };

  // Extract the array from the cache for the specified key
  const dataArray = Array.isArray(clonedCache[key]) ? clonedCache[key] : [];

  // Update the specific item by `_id`
  clonedCache[key] = dataArray.map((item: Record<string, any>) =>
    item._id === id ? { ...item, ...updatedData } : item
  );

  return clonedCache;
}

function deleteFromCacheHandlerReactQuery(
  id: string,
  oldData: Record<string, any>,
  key: string
): Record<string, any> {
  // Clone the old cache to avoid mutation
  const clonedCache = { ...oldData };

  // Extract the array from the cache for the specified key
  const dataArray = Array.isArray(clonedCache[key]) ? clonedCache[key] : [];

  // Remove the item with the specified `_id`
  clonedCache[key] = dataArray.filter(
    (item: Record<string, any>) => item._id !== id
  );

  return clonedCache;
}

function deleteFromCacheSpecificKeyHandlerReactQuery(
  id: string,
  oldData: Record<string, any>,
  key: string,
  RecordKey: string
): Record<string, any> {
  // Clone the old cache to avoid mutation
  const clonedCache = { ...oldData };

  // Extract the array from the cache for the specified key
  const dataArray = Array.isArray(clonedCache[key]) ? clonedCache[key] : [];

  // Remove the item with the specified `_id`
  clonedCache[key] = dataArray.filter(
    (item: Record<string, any>) => item[RecordKey] !== id
  );

  return clonedCache;
}

export {
  addInCacheHandlerReactQuery,
  updateInCacheHandlerReactQuery,
  deleteFromCacheHandlerReactQuery,
  deleteFromCacheSpecificKeyHandlerReactQuery,
};
