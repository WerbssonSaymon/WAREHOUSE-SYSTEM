export const updateWarehouse = (setWarehouses, id, updatedData) => {
    setWarehouses((prevWarehouses) =>
      prevWarehouses.map((warehouse) =>
        warehouse.id === id ? { ...warehouse, ...updatedData } : warehouse
      )
    );
  };
  
export const deleteWarehouse = ( setWarehouses, id) => {
    setWarehouses((prevWarehouses) =>
      prevWarehouses.filter((warehouse) => warehouse.id !== id)
    );
  };