
export default function prefixCls(prefix, ident = '-') {
  var hasOwn = {}.hasOwnProperty;

  return function className(...args) {
    const classes = [];

    if (!args || args.length === 0 || Object.keys(args).length === 0) {
      return prefix;
    }
    
    for (let i = 0 ; i < args.length; i++) {
      const arg = args[i];
      const argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        if (!arg) {
          classes.push(prefix);
        } else {
          classes.push(`${prefix}${ident}${args[i]}`);
        }
      } else if (Array.isArray(arg)) {
        classes.push(className.apply(null, arg));
      } else if (argType === 'object') {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(`${prefix}${ident}${key}`);
          }
        }
      } else if (argType === 'function') {
        classes.push(arg());
      }
    }

    return classes.join(' ');
  }
}