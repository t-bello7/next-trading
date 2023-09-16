const groupBy = (array : any, key: any) => {
  return array.reduce((result: any, obj: any) => {
     (result[obj[key]] = result[obj[key]] || []).push(obj);
     return result;
  }, {});
};

export {groupBy}