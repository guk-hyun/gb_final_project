$.ajax({
    url: "/user/test",
    method: "GET",
    dataType: "json"
})
.done(function(data) {
    // 서버로부터 받은 JSON 데이터를 처리합니다.
    // 여기에서 UserDTO 객체의 필드에 접근할 수 있습니다.
    var id = data.id;
    var age = data.age;

    // <h1> 태그에 사용자 정보를 표시합니다.
    var userInfoElement = $("#userInfo");
    userInfoElement.text("User ID: " + id + ", Age: " + age);
})
.fail(function(xhr, status, errorThrown) {
    // 오류 처리
    console.error("오류 발생: " + errorThrown + ", 상태: " + status);
})
.always(function() {
    // 요청 완료 후 항상 실행되는 코드
    console.log("요청이 완료되었습니다.");
});
