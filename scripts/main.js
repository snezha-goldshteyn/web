let orders = new App.Orders();
let truck = new App.Truck(1, orders);

let formHandler = new App.FormHandler('[data-coffee-order="coffee"]');
let checkList = new App.CheckList('[data-coffee-order="checklist"]');
formHandler.addHandler(function (order) {
    truck.createOrder(order);
    checkList.addRow(order);
});

checkList.addCheckListHandler(function (email) {
    truck.deliverOrder(email);
    checkList.removeRow(email);
});

formHandler.addEmailHandler(function (email) {
    return orders.get(email)? "email already exists" : "";
});