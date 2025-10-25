// ฟังชั่นเสิร์ช
function search_t(elem) {
    // console.log(elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

     var html = '';
    for (let i = 0; i < product.length; i++) {

        if( product[i].name.includes(value) ) {
        html += `<div onclick"openProductDetail()${i}" class="pd-it ${product[i].type}">
                <a href="${product[i].link}">
                <img class="pd-od" src="${product[i].img}" alt="">
                    </a>
                    <h4 style="font-size: 1.5vw;">${product[i].name}</h4>
                    <p style="font-size: 1.2vw;">${product[i].n}</p>    
            </div>`;
        }
    }

    if(html == '') {
        $("#pp").html(`<p>ไม่พบข้อมูล</p>`)
    } else {
        $("#pp").html(html); 
    }
    
}

// ฟังชั่นหมวดหมู่

function search_d(clek) {
    console.log(clek)
        $(".pd-it").css('display', 'none')
    if(clek == 'mp') {
        $("."+clek).css('display', 'block')
    }
     if(clek == 'im') {
        $("."+clek).css('display', 'block')
    }
     if(clek == 'back') {
        $("."+clek).css('display', 'block')
        
    }
     if(clek == 'do') {
        $("."+clek).css('display', 'block')
    }
     if(clek == 'ai') {
        $("."+clek).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
        productindex = 0;
        console.log(productindex)
        
}