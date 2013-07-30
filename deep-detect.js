var deepDetect = function(list, iterator, context) {
  var _deepDetect = function(list, iterator, context) {
    if (_.isArray(list[0])) {
      _.each(list, function(sublist) {
        return _deepDetect(sublist, iterator, context); 
      });
    }
    else {
      var res = _.detect(list, iterator, context);
      if (res == null) {
        throw res;
      }
    }
  };
  try {
    console.log('foo');
    _deepDetect(list, iterator, context);
  }
  catch (err) {
    return err;
  }
};