window.onload = function () {

    const name = document.getElementById('name');
    const cardnumber = document.getElementById('cardnumber');
    const carddate_mm = document.getElementById('carddate_mm');
    const carddate_yy = document.getElementById('carddate_yy');
    const securitycode = document.getElementById('securitycode');

    let cctype = null;


    var cardnumber_mask = new IMask(cardnumber, {
        mask: [{
            mask: '0000 0000 0000 0000',
        }, ],
        dispatch: function (appended, dynamicMasked) {
            var number = (dynamicMasked.value + appended).replace(/\D/g, '');

            for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
                let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
                if (number.match(re) != null) {
                    return dynamicMasked.compiledMasks[i];
                }
            }
        }
    });
    var carddate_mm_mask = new IMask(carddate_mm, {
        mask: 'MM',
        groups: {
            MM: new IMask.MaskedPattern.Group.Range([1, 12]),
        }
    });
    var carddate_yy_mask = new IMask(carddate_yy, {
        mask: 'YY',
        groups: {
            YY: new IMask.MaskedPattern.Group.Range([0, 99]),
        }
    });
    var securitycode_mask = new IMask(securitycode, {
        mask: '000',
    });

    function toggle_show(id) {
        document.getElementById(id).style.display = document.getElementById(id).style.display == 'none' ? 'block' : 'none';
    }


}