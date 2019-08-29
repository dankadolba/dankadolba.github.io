function take(array, count) {
    var clone = array.slice(),
      output = [],
      count = parseInt(count);
   
    if (isNaN(count)) {
      count = 1;
    } else {
      if (count > array.length) count = array.length;
    }
   
    for (var i = 0; i < count; i++) {
      output.push(clone.splice(Math.floor(Math.random() * clone.length), 1));
    }
   
    return output;
  };
  
  $('form#randomize').submit(function (e) {
      e.preventDefault();
    var users = $('#src').val().trim().split('\n');
    var count = parseInt(this.count.value, 10);
    res = take(users,count)
    for (var i = 0; i < count; i++) {
        div.insertAdjacentHTML('afterbegin', '<p><a href="'+ res[i] +'">' + res[i] + '</a></p>');
    }
  });


