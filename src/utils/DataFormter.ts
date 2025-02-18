class DataFormatter {
  static formatProductData(product: Record<string, any>) {
    const keys = Object.keys(product);
    const formatter = [];
    for (const key of keys) {
      formatter.push({
        key: key,
        value: product[key].split(","),
      });
    }
    return formatter;
  }

  static formatOrder(orders: Array<Record<string, any>>) {
    const TempOrders: Array<Record<string, any>> = [];
    orders.forEach((commonInfo: Record<string, any>) => {
      const cloneOfCommonInfo = { ...commonInfo };
      delete cloneOfCommonInfo.orders;
      commonInfo.orders.forEach((order: Record<string, any>) => {
        TempOrders.push({
          ...cloneOfCommonInfo,
          ...order,
        });
      });
    });
    return TempOrders;
  }

  static formatAddress(address: Record<string, any>): string {
    // Initialize an array to hold the parts of the address
    const addressParts: string[] = [];
  
    // Loop through the address object
    for (const [key, value] of Object.entries(address)) {
      // If the value is not null or undefined, add it to the addressParts array
      if (value) {
        addressParts.push(value);
      }
    }
  
    // Concatenate the address parts into a single string, with commas separating each part
    return addressParts.join(', ');
  }
  
}

export default DataFormatter;
