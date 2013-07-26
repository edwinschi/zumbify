jQuery.fn.random = function() {
    var randomIndex = Math.floor(Math.random() * this.length);  
    return jQuery(this[randomIndex]);
};
jQuery.fn.zumbify = function() {
    jQuery(this).css("background-color","green");
    jQuery(this).css("border-color","green");
    jQuery(this).css("color","green");
    jQuery(this).addClass("zumbified");
     
    jQuery(this).spread_infection();
};
jQuery.fn.spread_infection = function() {
    
    if(jQuery(".zumbified").length < 10){
        var paciente_atual = $(this);
        console.log("paciente_atual:");
        console.log(paciente_atual);
    
        var irmao = paciente_atual.siblings("*").not(".zumbified").random();
        console.log("paciente irmao:");
        console.log(paciente_atual.siblings("*").not(".zumbified").random());
        if(irmao.length == 0){
        
            var filho = paciente_atual.find("*").not(".zumbified").random();
            console.log("paciente filho:");
            console.log(filho);
            if(filho.length == 0){
            
                var pai = paciente_atual.parents("*").not(".zumbified").random();
                console.log("paciente pai:");
                console.log(pai);
                if(pai.length != 0){
                    jQuery(pai).zumbify();
                }
                
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
        var paciente_zero = jQuery("body").find("*").random();
        jQuery(paciente_zero).zumbify();
        
    }
});


jQuery(document).ready(function(){
    
    jQuery.apocalipsezumbi();
    
});
