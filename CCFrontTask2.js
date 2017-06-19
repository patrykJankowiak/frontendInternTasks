exports.damage = function (spellString) {
  const a = spellString.split('');
  const start = spellString.search(/fe/) + 2;
  const stop = spellString.search(/ai/);
  const reg2 = spellString.lastIndexOf('ai') + 2;
  let damage = 0;

  if (start > -1 && stop > -1) {
    damage += 1;

    for (let i = start; i < reg2; i++) {
      if (a[i] === 'f' && a[i + 1] === 'e') {
        return 0;
      } else if (a[i] === 'j') {
        if (a[i + 1] === 'e') {
          if (a[i + 2] === 'e') {
            damage += 3;
            i += 2;
          } else {
            damage += 2;
            i += 1;
          }
        } else {
          damage -= 1;
        }
      } else if (a[i] === 'a') {
        if (a[i + 1] === 'i') {
          if (a[i + 2] === 'n') {
            if (a[i + 3] === 'e') {
              damage += 4;
              i += 3;
            } else {
              damage += 3;
              i += 2;
            }
          } else {
            damage += 2;
            i += 1;
          }
        } else {
          damage -= 1;
        }
      } else if (a[i] === 'd') {
        if (a[i + 1] === 'a') {
          if (a[i + 2] === 'i') {
            damage += 5;
            i += 2;
          } else {
            damage -= 1;
          }
        } else {
          damage -= 1;
        }
      } else {
        damage -= 1;
      }
    }
    if (damage < 0) {
      damage = 0;
    }
  } else {
    damage = 0;
  }
  return damage;
};
