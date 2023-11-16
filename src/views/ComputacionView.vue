<ProductosCard v-for="producto in productos" :key="producto.id" :producto="producto" @actualizarProductos="actualizarProductos($event)" :actualizar=this.actualizar></ProductosCard>
