/* const siteName = $("#siteName");
const siteUrl = $("#siteUrl");
const dailyLimit = $("#dLimit");
 */

let siteName;
let siteUrl;
let dailyLimit;

$("#add_new").click(function () {
    clearInput();
});

$("#addBtn").click(function () {
    siteName = $("#siteName").val();
    siteUrl = $("#siteUrl").val();
    dailyLimit = $("#dLimit").val();
    $("#addNewModal").modal('hide');
    addDiv(siteName,dailyLimit);
    clearInput();
});

function addDiv(name, limit) {
    let div = `<div class="div-card">
    <div class="flex-card">
        <div class="name">${name}</div>
        <div class="time">
            <div class="day_Limit">Daily Limit : ${limit}</div>
            <div class="remaining">Remaining : ${limit}</div>
        </div>
        <div class="btnSet">
            <div class="btnEdit">
                <span class="material-symbols-outlined">
                    edit_note
                </span>
            </div>
            <div class="play">
                <span class="material-symbols-outlined">
                    play_arrow
                </span>
            </div>
            <div class="stop">
                <span class="material-symbols-outlined">
                    stop
                </span>
            </div>
            <div class="delete">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>
    </div>
</div>`
    $("#content").append(div);
}

function clearInput() {
    $("#siteName").val('');
    $("#siteUrl").val('');
    $("#dLimit").val('');
}