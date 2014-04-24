    var zumbi = "<div style='position:absolute;' class='zumbi'><img class='zumbi' src='http://www.ragnadb.com.br/img/monstro/1015/zumbi.gif' ></img></div>";
    jQuery.fn.random = function() {
        var randomIndex = Math.floor(Math.random() * this.length);  
        return jQuery(this[randomIndex]);
    };
    var timestamp_ultimo_zumbi = 0;
    jQuery.fn.zumbify = function() {
        timestamp_zumbi_atual = Math.round(new Date().getTime() / 1000);
        if(timestamp_zumbi_atual-timestamp_ultimo_zumbi > 10000){
            console.log(timestamp_ultimo_zumbi);
        
            //jQuery(this).css("background-color","green");
            //jQuery(this).css("border-color","green");
            //jQuery(this).css("color","green");
        
    
            //jQuery(this).addClass("zumbified");
            //jQuery(this).spread_infection();
            console.log(jQuery(this).offset());
            jQuery(this).addClass("zumbified");
            console.log(jQuery(this));
            //console.log()
            var new_zombie = jQuery(zumbi).appendTo("body"); //changeElementType("a");
            new_zombie.offset({ top: jQuery(this).offset().top, left: jQuery(this).offset().left});
        
            //remove();
        
            new_zombie.spread_infection();
            timestamp_ultimo_zumbi = timestamp_zumbi_atual;
        }
    };
    jQuery.fn.spread_infection = function() {
    
        if(jQuery(".zumbified").length < 10){
            var paciente_atual = $(this);
            console.log("paciente_atual:");
            console.log(paciente_atual);
    
            var irmao = paciente_atual.siblings("*").not(".zumbified").not(".zumbi").not(":hidden").random();
            console.log("paciente irmao:");
            console.log(paciente_atual.siblings("*").not(".zumbified").not(".zumbi").not(":hidden").random());
            if(irmao.length == 0){
        
                var filho = paciente_atual.find("*").not(".zumbified").not(".zumbi").not(":hidden").random();
                console.log("paciente filho:");
                console.log(filho);
                if(filho.length == 0){
                    var randomico = jQuery("body").find("*").not(":hidden").random()
                    jQuery(randomico).zumbify();
                
                    /*
                var pai = paciente_atual.parents("*").not("body").not(".zumbified").not(".zumbi").random();
                console.log("paciente pai:");
                console.log(pai);
                if(pai.length != 0){
                    jQuery(pai).zumbify();
                }*/
                    //                
                } else {
                    jQuery(filho).zumbify();
                }
        
            } else {
                jQuery(irmao).zumbify();
            }
        }
    };

    jQuery.extend( {
        apocalipsezumbi: function(o) { 
            var paciente_zero = jQuery("body").find("*").not(":hidden").random();
            jQuery(paciente_zero).zumbify();
        
        }
    });


    jQuery(document).ready(function(){
    
        jQuery.apocalipsezumbi();
    
    });
