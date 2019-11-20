(
    function () {
        let App = window.App || {};

        function Truck (id, orders) {
            this.id = id;
            this.orders = orders;
        }

        Truck.prototype.createOrder = function(order) {
            if(!order.email) {
                throw Error("email not defined in order")
            }
            return this.orders.add(order.email, order);

        };

        Truck.prototype.deliverOrder = function(email) {
            const result = this.orders.remove(email);
            if (result){
                console.log("Order has been delivered");
                return true;
            }
            return false;
        };

        Truck.prototype.printOrders = function () {
            console.log(`truck ${this.id} has following pending orders`);
            this.orders.getAll().forEach (function (o){
                console.log(o);
            })
        };

        App.Truck = Truck;
        window.App = App;
    }
)();