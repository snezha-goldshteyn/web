(
    function () {
        let App = window.App || {}; //создаем пространство имен, доступное между модулями

        function Orders() {
            this.data = {};
        }//конструктор

        Orders.prototype.add=function(email, order){
            if(this.data[email]){
                return false;
            }
            this.data[email]=order;
            return true;
        };

        Orders.prototype.get = function(email) {
            return this.data[email];
        };

        Orders.prototype.remove = function(email) {
            if (this.data[email]) {
                delete this.data[email];
                return true
            }
            return false;
        };

        Orders.prototype.getAll = function () {
            return Object.values(this.data);
        }; //методы объекта

        App.Orders = Orders; //экспорт объектов
        window.App = App; //помещение в пространство App
    }
)();