(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function Row (order) {
            let $div = $('<div></div>', {
               class:'form-check', 'data-coffee-order':'checkbox'
            });
            let $label = $('<label></label>', {
                class: 'form-check-label'
            });
            let $input = $('<input>', {
                type: 'checkbox',
                class: 'form-check-input',
                value: order.email
            });
            let content = `${order.email}, ${order.coffee}, ${order.size}, ${order.flavor}, ${order.strength}`;

            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function CheckList (selector) {
            this.$checkListElement = $(selector);
        }

        CheckList.prototype.addRow = function (order) {
            let row = new Row(order);
            this.$checkListElement.append(row.$rowElement);
        };

        CheckList.prototype.removeRow = function (email) {
            this.$checkListElement.find(`[value="${email}"]`)
                .closest('[data-coffee-order="checkbox"]').remove();
        };

        CheckList.prototype.addCheckListHandler = function (fn) {
            this.$checkListElement.on('click', 'input', function (event) {
                event.preventDefault();
                fn(event.target.value); //получаем из input значение value, ссылка на строку 16
            })
        };

        App.CheckList = CheckList;

    }
)();

