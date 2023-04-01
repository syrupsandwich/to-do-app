/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/default.css":
/*!*******************************!*\
  !*** ./src/style/default.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/program/to-do.js":
/*!******************************!*\
  !*** ./src/program/to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCategory": () => (/* binding */ makeCategory),
/* harmony export */   "printCategories": () => (/* binding */ printCategories),
/* harmony export */   "transferProject": () => (/* binding */ transferProject)
/* harmony export */ });
const categoryFactory = (category) => {
  const renameCategory = (input) => {
    if (typeof input !== "string") {
      return console.log(Error("The specified title is not a string."));
    } else {
      category = input;
    }
  };

  let getTitle = () => {
    return category;
  };

  const projects = [];

  const printProjects = (message) => {
    if (projects.length === 0) {
      return console.log(Error(`${category} : empty`));
    }
    if (!message) {
      console.log(`${category} : A list of all projects:`);
    } else {
      console.log(`${category} : ${message}`);
    }
    projects.forEach((project, index) => {
      console.log(" ", index, JSON.parse(JSON.stringify(project)));
    });
  };

  const moveProject = (positionA, positionB) => {
    if (!projects[positionA]) {
      return console.log(Error("The specified origin index is out of range."));
    }
    if (!projects[positionB]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let objectA = projects.splice(positionA, 1)[0];
    projects.splice(positionB, 0, objectA);
    printProjects("The projects have been reordered.");
  };

  const removeProject = (index) => {
    if (!projects[index]) {
      return console.log(Error("The specified index is out of range."));
    }
    let title = projects[index].title;
    projects.splice(index, 1);
    printProjects(`Project "${title}" has been removed.`);
  };

  const taskFactory = ({
    title = "",
    description = "",
    dueDate = "",
    priority = "",
  }) => {
    let taskStatus = false;
    const checkCompletionStatus = () => {
      if (taskStatus) {
        console.log(`Task "${title}" has been completed. :D`);
      }
      if (!taskStatus) {
        console.log(`Task "${title}" has not been completed. :/`);
      }
      return taskStatus;
    };
    const changeCompletionStatus = () => {
      taskStatus = taskStatus ? false : true;
    };
    return {
      title,
      description,
      dueDate,
      priority,
      checkCompletionStatus,
      changeCompletionStatus,
    };
  };

  const projectFactory = ({ title = "", description = "" }) => {
    const tasks = [];
    const printTasks = (message = `Tasks in "${title}"`) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${title}".`);
      }
      console.log(`${category} : ${message}`);
      tasks.forEach((task, index) => {
        console.log(" ", index, task);
      });
    };
    const makeTask = (task = {}) => {
      tasks.push(taskFactory(task));
      printTasks(`A new task has been added to "${title}".`);
    };
    const removeTask = (index) => {
      if (!tasks[index]) {
        return console.log(Error("The specified task index is out of range."));
      }
      let title = tasks[index].title;
      tasks.splice(index, 1);
      printTasks(`The task "${title}" has been removed.`);
    };
    const transferTask = (taskIndex, { destinationProject }) => {
      if (!tasks[taskIndex]) {
        return console.log(Error("The specified task index is out of range."));
      }
      if (!projects[destinationProject]) {
        return console.log(
          Error("The specified destination index is out of range.")
        );
      }
      let task = tasks.splice(taskIndex, 1)[0];
      projects[destinationProject].tasks.push(task);
      projects[destinationProject].printTasks(
        `Task ${task.title} has been transfered.`
      );
    };

    return {
      title,
      description,
      tasks,
      printTasks,
      makeTask,
      removeTask,
      transferTask,
    };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
  };

  const moveTask = (projectIndex, positionA, positionB) => {
    if (!projects[projectIndex]) {
      return console.log(Error("The specified project index is out of range."));
    }
    if (!projects[projectIndex].tasks[positionA]) {
      return console.log(
        Error("The first specified task index is out of range.")
      );
    }
    if (!projects[projectIndex].tasks[positionB]) {
      return console.log(
        Error("The second specified task index is out of range.")
      );
    }
    let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
    projects[projectIndex].tasks.splice(positionB, 0, task);
    projects[projectIndex].projects("The task list has been reordered");
  };

  return {
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    moveTask,
  };
};

const categories = [];

const makeCategory = (title) => {
  let project = categoryFactory(title);
  categories.push(project);
  return categories[categories.length - 1];
};

const printCategories = (message) => {
  if (!message) {
    console.log("A list of all categories:");
  } else {
    console.log("message");
  }
  categories.forEach((category, index) => {
    console.log(
      " ",
      `${index}:`,
      category.getTitle(),
      `(${category.projects.length} projects)`
    );
  });
};

const transferProject = (categoryIndexA, categoryIndexB, projectIndex) => {
  if (!categories[categoryIndexA]) {
    return console.log(Error("The specified origin index is out of range."));
  }
  if (!categories[categoryIndexB]) {
    return console.log(
      Error("The specified destination index is out of range.")
    );
  }
  let project = categories[categoryIndexA].projects.splice(projectIndex, 1)[0];
  categories[categoryIndexB].projects.push(project);
  categories[categoryIndexB].printProjects(`The project has been added.`);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/program/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/default.css */ "./src/style/default.css");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/program/to-do.js");



const demo1 = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeCategory)("Demo");

demo1.makeProject({
  title: "To-do app",
  description: "A place to store all of your tasks",
  tasks: [],
});

demo1.projects[0].makeTask({
  title: "Look around",
  description: "Get to know the app.",
});

demo1.makeProject({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

demo1.projects[1].makeTask({
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

demo1.projects[1].makeTask({
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

demo1.projects[1].makeTask({
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

demo1.projects[1].makeTask({
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

demo1.makeProject({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

demo1.projects[2].makeTask({
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

demo1.projects[2].makeTask({
  title: "draw 5 boxes on a page",
  description: "5 leaves enough room to check the convergences",
});

demo1.projects[2].makeTask({
  title: "50% rule",
  description:
    "Draw whatever you want for the same amount of time spent practicing.",
});

demo1.printProjects();

const work = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeCategory)("Work");

work.makeProject({
  title: "Block World",
  description: "an original sandbox game where everything is blocky",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printCategories)();

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.transferProject)(0, 1, 0);
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printCategories)();

demo1.projects[0].printTasks();
demo1.printProjects();
demo1.projects[0].transferTask(0, { destinationProject: 1 });

demo1.projects[1].title = "Institutionalized";
demo1.printProjects();

demo1.projects[0].tasks[0].title = "chill";
demo1.projects[0].tasks[0].description = "space out to some bops";
demo1.projects[0].tasks[0].priority = "important";
demo1.projects[0].printTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZTs7QUFFZiwwREFBZTtBQUNmLDBEQUFlOztBQUVmO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2RlZmF1bHQuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtL3RvLWRvLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY2F0ZWdvcnlGYWN0b3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHJlbmFtZUNhdGVnb3J5ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0aXRsZSBpcyBub3QgYSBzdHJpbmcuXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2F0ZWdvcnkgPSBpbnB1dDtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihgJHtjYXRlZ29yeX0gOiBlbXB0eWApKTtcbiAgICB9XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gOiBBIGxpc3Qgb2YgYWxsIHByb2plY3RzOmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtb3ZlUHJvamVjdCA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcG9zaXRpb25BXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcG9zaXRpb25CXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG9iamVjdEEgPSBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgICBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25CLCAwLCBvYmplY3RBKTtcbiAgICBwcmludFByb2plY3RzKFwiVGhlIHByb2plY3RzIGhhdmUgYmVlbiByZW9yZGVyZWQuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdHNbaW5kZXhdLnRpdGxlO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcHJpbnRQcm9qZWN0cyhgUHJvamVjdCBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbiAgfTtcblxuICBjb25zdCB0YXNrRmFjdG9yeSA9ICh7XG4gICAgdGl0bGUgPSBcIlwiLFxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgICBkdWVEYXRlID0gXCJcIixcbiAgICBwcmlvcml0eSA9IFwiXCIsXG4gIH0pID0+IHtcbiAgICBsZXQgdGFza1N0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGNoZWNrQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiBjb21wbGV0ZWQuIDpEYCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuIDovYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgY2hlY2tDb21wbGV0aW9uU3RhdHVzLFxuICAgICAgY2hhbmdlQ29tcGxldGlvblN0YXR1cyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHsgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIgfSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgcHJpbnRUYXNrcyA9IChtZXNzYWdlID0gYFRhc2tzIGluIFwiJHt0aXRsZX1cImApID0+IHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVycm9yKGBUaGVyZSBhcmUgbm8gdGFza3MgaW4gXCIke3RpdGxlfVwiLmApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IDogJHttZXNzYWdlfWApO1xuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgXCIsIGluZGV4LCB0YXNrKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbWFrZVRhc2sgPSAodGFzayA9IHt9KSA9PiB7XG4gICAgICB0YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgICAgIHByaW50VGFza3MoYEEgbmV3IHRhc2sgaGFzIGJlZW4gYWRkZWQgdG8gXCIke3RpdGxlfVwiLmApO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgaWYgKCF0YXNrc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgICAgfVxuICAgICAgbGV0IHRpdGxlID0gdGFza3NbaW5kZXhdLnRpdGxlO1xuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHByaW50VGFza3MoYFRoZSB0YXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICAgIH07XG4gICAgY29uc3QgdHJhbnNmZXJUYXNrID0gKHRhc2tJbmRleCwgeyBkZXN0aW5hdGlvblByb2plY3QgfSkgPT4ge1xuICAgICAgaWYgKCF0YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICAgIH1cbiAgICAgIGlmICghcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGxldCB0YXNrID0gdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgICBwcm9qZWN0c1tkZXN0aW5hdGlvblByb2plY3RdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICBwcm9qZWN0c1tkZXN0aW5hdGlvblByb2plY3RdLnByaW50VGFza3MoXG4gICAgICAgIGBUYXNrICR7dGFzay50aXRsZX0gaGFzIGJlZW4gdHJhbnNmZXJlZC5gXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHRhc2tzLFxuICAgICAgcHJpbnRUYXNrcyxcbiAgICAgIG1ha2VUYXNrLFxuICAgICAgcmVtb3ZlVGFzayxcbiAgICAgIHRyYW5zZmVyVGFzayxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IG1ha2VQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pKTtcbiAgICBwcmludFByb2plY3RzKFwiQSBuZXcgcHJvamVjdCBoYXMgYmVlbiBtYWRlLlwiKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RzKFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5hbWVDYXRlZ29yeSxcbiAgICBnZXRUaXRsZSxcbiAgICBwcm9qZWN0cyxcbiAgICBwcmludFByb2plY3RzLFxuICAgIG1vdmVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgbWFrZVByb2plY3QsXG4gICAgbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IG1ha2VDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNhdGVnb3J5RmFjdG9yeSh0aXRsZSk7XG4gIGNhdGVnb3JpZXMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IHByaW50Q2F0ZWdvcmllcyA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBsaXN0IG9mIGFsbCBjYXRlZ29yaWVzOlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XG4gIH1cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiIFwiLFxuICAgICAgYCR7aW5kZXh9OmAsXG4gICAgICBjYXRlZ29yeS5nZXRUaXRsZSgpLFxuICAgICAgYCgke2NhdGVnb3J5LnByb2plY3RzLmxlbmd0aH0gcHJvamVjdHMpYFxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgdHJhbnNmZXJQcm9qZWN0ID0gKGNhdGVnb3J5SW5kZXhBLCBjYXRlZ29yeUluZGV4QiwgcHJvamVjdEluZGV4KSA9PiB7XG4gIGlmICghY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4QV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICApO1xuICB9XG4gIGxldCBwcm9qZWN0ID0gY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4QV0ucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF07XG4gIGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdLnByaW50UHJvamVjdHMoYFRoZSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkLmApO1xufTtcblxuZXhwb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMsIHRyYW5zZmVyUHJvamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZS9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMsIHRyYW5zZmVyUHJvamVjdCB9IGZyb20gXCIuL3RvLWRvLmpzXCI7XG5cbmNvbnN0IGRlbW8xID0gbWFrZUNhdGVnb3J5KFwiRGVtb1wiKTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJUby1kbyBhcHBcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSB0byBzdG9yZSBhbGwgb2YgeW91ciB0YXNrc1wiLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMF0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJMb29rIGFyb3VuZFwiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdG8ga25vdyB0aGUgYXBwLlwiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkJ1eSBwdWxsZXlzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZvciBleGVyY2lzZXMgdGhhdCByZXF1aXJlIGFuIHVwd2FyZCBkaXJjdGlvbiBvZiByZXNpc3RhbmNlLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiR2V0IHdlaWdodCBwbGF0ZXNcIixcbiAgZGVzY3JpcHRpb246IFwiQSBtaW5pbWFsaXN0aWMgc2V0IHRoYXQgYWxsb3dzIGluY3JlbWVudHMgb2YgNWxiLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiRmluZCBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgbGlrZSByb3BlLCB3ZWJiaW5nLCBjYXJpYmluZXJzLCBjaGFpbnMsIGZvYW0uLi4gXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJNYWtlIHNvbWUgZXF1aXBtZW50XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFzayBtb20gdG8gc2V3IHRvZ2V0aGVyIG15IGludmVudGlvbnNcIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIjI1MCBib3ggY2hhbGxlbmdlXCIsXG4gIGRlc2NyaXB0aW9uOiAnXCIuLi5kcmF3IGEgYm94IC0gdGhlbiBkbyBpdCBhZ2FpbiBhbm90aGVyIDI0OSB0aW1lcy5cIicsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkZpbmQgZHJhd2luZyBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJhIGxhcmdlIHN0YWNrIG9mIHByaXRlciBwYXBlciBhbmQgYSAuNSBwZW4uXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJkcmF3IDUgYm94ZXMgb24gYSBwYWdlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIjUgbGVhdmVzIGVub3VnaCByb29tIHRvIGNoZWNrIHRoZSBjb252ZXJnZW5jZXNcIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIjUwJSBydWxlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiRHJhdyB3aGF0ZXZlciB5b3Ugd2FudCBmb3IgdGhlIHNhbWUgYW1vdW50IG9mIHRpbWUgc3BlbnQgcHJhY3RpY2luZy5cIixcbn0pO1xuXG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5cbmNvbnN0IHdvcmsgPSBtYWtlQ2F0ZWdvcnkoXCJXb3JrXCIpO1xuXG53b3JrLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiQmxvY2sgV29ybGRcIixcbiAgZGVzY3JpcHRpb246IFwiYW4gb3JpZ2luYWwgc2FuZGJveCBnYW1lIHdoZXJlIGV2ZXJ5dGhpbmcgaXMgYmxvY2t5XCIsXG59KTtcblxucHJpbnRDYXRlZ29yaWVzKCk7XG5cbnRyYW5zZmVyUHJvamVjdCgwLCAxLCAwKTtcbnByaW50Q2F0ZWdvcmllcygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5kZW1vMS5wcm9qZWN0c1swXS50cmFuc2ZlclRhc2soMCwgeyBkZXN0aW5hdGlvblByb2plY3Q6IDEgfSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLnRpdGxlID0gXCJJbnN0aXR1dGlvbmFsaXplZFwiO1xuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS50aXRsZSA9IFwiY2hpbGxcIjtcbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLmRlc2NyaXB0aW9uID0gXCJzcGFjZSBvdXQgdG8gc29tZSBib3BzXCI7XG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS5wcmlvcml0eSA9IFwiaW1wb3J0YW50XCI7XG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=