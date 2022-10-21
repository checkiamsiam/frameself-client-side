export const monthDetector = (monthIndex) => {
  switch (monthIndex) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apl";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nav";
    case 11:
      return "Dec";

    default:
      return "not logical";
  }
};

export const configureDays = (formRef , setDays) => {
  if (parseInt(formRef.current?.birthMonth?.value) === 1) {
    if (
      (0 === parseInt(formRef.current?.birthYear?.value) % 4 && 0 !== parseInt(formRef.current?.birthYear?.value) % 100) ||
      0 === parseInt(formRef.current?.birthYear?.value) % 400
    ) {
      setDays(Array.from(new Array(29), (element, index) => 1 + index));
    } else {
      setDays(Array.from(new Array(28), (element, index) => 1 + index));
    }
  } else if (
    parseInt(formRef.current?.birthMonth?.value) === 3 ||
    parseInt(formRef.current?.birthMonth?.value) === 5 ||
    parseInt(formRef.current?.birthMonth?.value) === 8 ||
    parseInt(formRef.current?.birthMonth?.value) === 10
  ) {
    setDays(Array.from(new Array(30), (element, index) => 1 + index));
  } else {
    setDays(Array.from(new Array(31), (element, index) => 1 + index));
  }
};

