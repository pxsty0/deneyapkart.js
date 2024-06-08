const serialFormat = (key: string, ...values: any) => {
  let msg: String = `DK+${key}=(${values.join(",")})`;
  return msg;
};

export default serialFormat;
