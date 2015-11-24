var $EV = (function(window,document){
	var Regrule = {
		numRegex : /^[0-9]+$/, 
       	decimalRegex : /^[0-9]*\.?[0-9]+$/,
       	emailRegex : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ ,
       	phoneRegex : /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/ ,
       	telRegex : /(^(\d{3})?-?\d{8}$)|(^(\d{4})?-?\d{7}$)/ ,
       	imgRegex : /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/,
       	urlRegex : /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
       	dateRegex : /\d{4}-\d{1,2}-\d{1,2}/
	}
	var verify = function(element,regtype){ //element 为元素name     regtype为验证类型，如果只是取值则不用传regtype
		var text = getValue(element);

		if(regtype==null){
			if(text==null){
				console.log(element+' is '+text);
			}
			return text;
		}

		regtype = Regrule[regtype+'Regex'];
		if ( regtype == null) { //同时判断null和undefined  ,这里regtype一般为undefined
			console.log( regtype+' Regtype is '+regtype);
			return regtype;
		};
		if(regtype =='phone'){
			text = text.toString().replace(/(\s+|-+|\++)/g,"");
		}
		return regtype.test(text);
	}

	var getValue = function(ele){
		if(ele !== null){
			var names = document.getElementsByName(ele);
			if(names.length==0){
				return undefined;
			}
			if(names[0].type =='checkbox'){
				var arr = new Array();
				for (var i = 0; i < names.length; i++) {
					if(names[i].checked){
						arr.push(names[i].value);
					}
				};
				if(arr.length==0){
					return null;
				}else{
					return arr;
				}
			}
			if(names[0].type =='radio'){
				var val = null;
				for (var i = 0; i < names.length; i++) {
					if(names[i].checked){
						val = names[i].value;
					}
				};
				if(val==null){
					return null;
				}else{
					return val;
				}
			}
			if(names[0].type == 'select-multiple'){
				var arr = new Array();
				for (var i = 0; i < names[0].options.length; i++) {
					if(names[0].options[i].selected){
						arr.push(names[0].options[i].value);
					}
				};
				if(arr.length==0){
					return null;
				}else{
					return arr;
				}
			}
			return names[0].value;
		}else{
			return undefined;
		}
	}
	return{
		v:verify
	}
})(window,document);