console.log("users.js script loaded");

function deleteUser(userId) {
    $.ajax ({
        url: '/user/' + userId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({userId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res)
            $("#"+userId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

const payMethodButtons = document.querySelectorAll('button[name="pay_method_button"]');

payMethodButtons.forEach(button => {
  button.addEventListener('click', event => {
    const payMethodInput = document.querySelector('input[name="preferred_pay_method"]');
    payMethodInput.value = event.target.value;
    console.log("Preffered method: " + payMethodInput.value);
  });
});