export const SELECT_PRODUCTO = "SELECT_PRODUCTO";
export const FILTERED_PRODUCTO = "FILTERED_PRODUCTO";

export const SelectProducto = (id) => ({
    type: SELECT_PRODUCTO,
    id_producto: id
});

export const FilteredProducto = (id) => ({
    type: SELECT_PRODUCTO,
    id_categoria: id
})