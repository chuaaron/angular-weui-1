
//��ʾ�����ض���
function showAndHide(attr,time){
    $(attr).show();
    setTimeout(function () {
        $(attr).hide();
    }, time);
}

//�Ƴ�session
function removeSession(name){
    window.sessionStorage.removeItem(name);
}