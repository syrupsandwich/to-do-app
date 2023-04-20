let updateSessionStorage = true;

const updateSessionStorageObject = (dataExportObject) => {
  if (!updateSessionStorage) {
    return;
  } else if (Object.hasOwn(dataExportObject, "categoryTimestamps")) {
    sessionStorage.setItem(
      `categoryTimestampsObject`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "projectTimestamps")) {
    sessionStorage.setItem(
      `category${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "taskTimestamps")) {
    sessionStorage.setItem(
      `project${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "taskStatus")) {
    sessionStorage.setItem(
      `task${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  }
};

export {updateSessionStorageObject};
