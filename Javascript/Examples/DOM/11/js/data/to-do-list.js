export default class CrudToDoList {
    constructor() {
        this.options = [
            {id: 1, title: "Xin việc ở Google", status: 0},
            {id: 2, title: "Mua biệt thự", status: 0},
            {id: 3, title: "Cưới vợ", status: 1},
            {id: 4, title: "Mua xe hơi", status: 0},
            {id: 5, title: "Sinh con", status: 1},
            {id: 6, title: "Đi du lịch vòng quanh thế giới", status: 0},
        ];

        this.showToDoList = () => {
            let toDoList = this.options;
            let tdlBottom = document.getElementById('tdl-bottom');
            let html = "<ul class='tdl-items'>";

            toDoList.forEach((item, index) => {
                html += "<li class='tdl-item'>";
                html += "<span class='tdl-text'>" + item.title + "</span>";
                html += "<button type='button' class='tdl-delete' value='" + item.id + "'><i class='ti-close'></i></input>";
                html += "</li>";
            });
            //
            // html += "<input type='checkbox' class='tdl-done' value='1'/>";
            // html += "<a class='tdl-update' href='javascript:void(0)' onclick='updateTitleFromList(" + i + ")'><i class='ti-reload'></i></a>";

            html += "</ul>";
            tdlBottom.innerHTML = html;
        }

        this.deleteTitleById = () => {
            let btnDelete = document.querySelectorAll('.tdl-delete');

            btnDelete.forEach((item, index) => {
                item.addEventListener('click', arrow => {
                    this.options.splice(index, 1);
                    console.log(item);
                    console.log(this.options);
                    this.showToDoList();
                });
            });

        }

    }
}