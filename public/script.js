function calcular(){
    
    var p1 = parseFloat(0.50); 
    var p2 = parseFloat(1.50);
    var p3 = parseFloat(1.80); 
    var p4 = parseFloat(2);
    var p5 = parseFloat(2.50);
    var p6 = parseFloat(3);
    var p7 = parseFloat(10);
    var p8 = parseFloat(40);

    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = document.getElementById("txt3").value;
    var s4 = document.getElementById("txt4").value;
    var s5 = document.getElementById("txt5").value;
    var s6 = document.getElementById("txt6").value;
    var s7 = document.getElementById("txt7").value;
    var s8 = document.getElementById("txt8").value;
    var s9 = document.getElementById("txt9").value;
    var s10 = document.getElementById("txt10").value;
    var s11 = document.getElementById("txt11").value;
    var s12 = document.getElementById("txt12").value;
    var s13 = document.getElementById("txt13").value;
    var s14 = document.getElementById("txt14").value;
    var s15 = document.getElementById("txt15").value;
    var s16 = document.getElementById("txt16").value;
    var s17 = document.getElementById("txt17").value;
    var s18 = document.getElementById("txt18").value;

    var r1 = parseFloat((p1*s1).toFixed(2));
    var r2 = parseFloat((p1*s2).toFixed(2));
    var r3 = parseFloat((p2*s3).toFixed(2));
    var r4 = parseFloat((p2*s4).toFixed(2));
    var r5 = parseFloat((p2*s5).toFixed(2));
    var r6 = parseFloat((p3*s6).toFixed(2));
    var r7 = parseFloat((p3*s7).toFixed(2));
    var r8 = parseFloat((p3*s8).toFixed(2));
    var r9 = parseFloat((p4*s9).toFixed(2));
    var r10 = parseFloat((p4*s10).toFixed(2));
    var r11 = parseFloat((p4*s11).toFixed(2));
    var r12 = parseFloat((p4*s12).toFixed(2));
    var r13 = parseFloat((p5*s13).toFixed(2));
    var r14 = parseFloat((p5*s14).toFixed(2));
    var r15 = parseFloat((p5*s15).toFixed(2));
    var r16 = parseFloat((p6*s16).toFixed(2));
    var r17 = parseFloat((p7*s17).toFixed(2));
    var r18 = parseFloat((p8*s18).toFixed(3));
      
    document.getElementById('res1').innerText = "R$ " + r1;
    document.getElementById('res2').innerText = "R$ " + r2;
    document.getElementById('res3').innerText = "R$ " + r3;
    document.getElementById('res4').innerText = "R$ " + r4;
    document.getElementById('res5').innerText = "R$ " + r5;
    document.getElementById('res6').innerText = "R$ " + r6;
    document.getElementById('res7').innerText = "R$ " +  r7;
    document.getElementById('res8').innerText = "R$ " + r8;
    document.getElementById('res9').innerText = "R$ " + r9;
    document.getElementById('res10').innerText = "R$ " + r10;
    document.getElementById('res11').innerText = "R$ " + r11;
    document.getElementById('res12').innerText = "R$ " + r12;
    document.getElementById('res13').innerText = "R$ " + r13;
    document.getElementById('res14').innerText = "R$ " + r14;
    document.getElementById('res15').innerText = "R$ " + r15;
    document.getElementById('res16').innerText = "R$ " + r16;
    document.getElementById('res17').innerText = "R$ " + r17;
    document.getElementById('res18').innerText = "R$ " + r18;

    var soma = parseFloat(r1+r2+r3+r4+r5+r6+r7+r8+r9+r10+r11+r12+r13+r14+r15+r16+r17+r18).toFixed(2);
    
    document.getElementById('total').innerText = "R$ " + soma;

};