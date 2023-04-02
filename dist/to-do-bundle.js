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
/* harmony export */   "printCategories": () => (/* binding */ printCategories)
/* harmony export */ });
const categoryFactory = (category) => {
  const renameCategory = (input) => {
    if (typeof input !== "string") {
      return console.error("The specified title is not a string.");
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
      return console.error(`${category} : empty`);
    }
    if (!message) {
      console.log(`${category} - A list of all projects:`);
    } else {
      console.log(`${category} - ${message}`);
    }
    projects.forEach((project, index) => {
      console.log(" ", index, JSON.parse(JSON.stringify(project)));
    });
  };

  const moveProject = (index, { destination }) => {
    if (!projects[index]) {
      return console.error("The specified origin index is out of range.");
    }
    if (!projects[destination]) {
      return console.error("The specified destination index is out of range.");
    }
    let objectA = projects.splice(index, 1)[0];
    projects.splice(destination, 0, objectA);
    printProjects("The projects have been reordered.");
  };

  const removeProject = (index) => {
    if (!projects[index]) {
      return console.error("The specified index is out of range.");
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
    const printTasks = (message = `A list of all tasks:`) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${title}".`);
      }
      console.log(`${category} / ${title} - ${message}`);
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
        return console.error("The specified task index is out of range.");
      }
      let title = tasks[index].title;
      tasks.splice(index, 1);
      printTasks(`The task "${title}" has been removed.`);
    };
    const transferTask = (taskIndex, { destinationProject }) => {
      if (!tasks[taskIndex]) {
        return console.error("The specified task index is out of range.");
      }
      if (!projects[destinationProject]) {
        return console.log(
          Error("The specified destination index is out of range.")
        );
      }
      let task = tasks.splice(taskIndex, 1)[0];
      projects[destinationProject].tasks.push(task);
      projects[destinationProject].printTasks(
        `Task "${task.title}" has been transferred.`
      );
    };
    const moveTask = (index, { destination }) => {
      if (!tasks[index]) {
        return console.log(
          Error("The first specified task index is out of range.")
        );
      }
      if (!tasks[destination]) {
        return console.log(
          Error("The second specified task index is out of range.")
        );
      }
      let task = tasks.splice(index, 1)[0];
      tasks.splice(destination, 0, task);
      printTasks("The task list has been reordered.");
    };

    return {
      title,
      description,
      tasks,
      printTasks,
      makeTask,
      removeTask,
      transferTask,
      moveTask,
    };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
  };

  const transferProject = (projectIndex, { destinationCategory }) => {
    if (!categories[destinationCategory]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let project = projects.splice(projectIndex, 1)[0];
    categories[destinationCategory].projects.push(project);
    categories[destinationCategory].printProjects(
      `The project "${project.title}" has been transfered.`
    );
  };

  return {
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    transferProject,
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

demo1.transferProject(0, { destinationCategory: 1 });
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

demo1.projects[0].printTasks();
demo1.projects[0].moveTask(1, { destination: 2 });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZTs7QUFFZiwyQkFBMkIsd0JBQXdCO0FBQ25ELDBEQUFlOztBQUVmO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCByZW5hbWVDYXRlZ29yeSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhlIHNwZWNpZmllZCB0aXRsZSBpcyBub3QgYSBzdHJpbmcuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXRlZ29yeSA9IGlucHV0O1xuICAgIH1cbiAgfTtcblxuICBsZXQgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgcHJpbnRQcm9qZWN0cyA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYCR7Y2F0ZWdvcnl9IDogZW1wdHlgKTtcbiAgICB9XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gLSBBIGxpc3Qgb2YgYWxsIHByb2plY3RzOmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gLSAke21lc3NhZ2V9YCk7XG4gICAgfVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtb3ZlUHJvamVjdCA9IChpbmRleCwgeyBkZXN0aW5hdGlvbiB9KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1tkZXN0aW5hdGlvbl0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgIH1cbiAgICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShpbmRleCwgMSlbMF07XG4gICAgcHJvamVjdHMuc3BsaWNlKGRlc3RpbmF0aW9uLCAwLCBvYmplY3RBKTtcbiAgICBwcmludFByb2plY3RzKFwiVGhlIHByb2plY3RzIGhhdmUgYmVlbiByZW9yZGVyZWQuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIik7XG4gICAgfVxuICAgIGxldCB0aXRsZSA9IHByb2plY3RzW2luZGV4XS50aXRsZTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHByaW50UHJvamVjdHMoYFByb2plY3QgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICAgIHRpdGxlID0gXCJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgZHVlRGF0ZSA9IFwiXCIsXG4gICAgcHJpb3JpdHkgPSBcIlwiLFxuICB9KSA9PiB7XG4gICAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBjaGVja0NvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2tTdGF0dXM7XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgdGFza1N0YXR1cyA9IHRhc2tTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICAgIGNoYW5nZUNvbXBsZXRpb25TdGF0dXMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IHByaW50VGFza3MgPSAobWVzc2FnZSA9IGBBIGxpc3Qgb2YgYWxsIHRhc2tzOmApID0+IHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVycm9yKGBUaGVyZSBhcmUgbm8gdGFza3MgaW4gXCIke3RpdGxlfVwiLmApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IC8gJHt0aXRsZX0gLSAke21lc3NhZ2V9YCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBtYWtlVGFzayA9ICh0YXNrID0ge30pID0+IHtcbiAgICAgIHRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICAgICAgcHJpbnRUYXNrcyhgQSBuZXcgdGFzayBoYXMgYmVlbiBhZGRlZCB0byBcIiR7dGl0bGV9XCIuYCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgICAgfVxuICAgICAgbGV0IHRpdGxlID0gdGFza3NbaW5kZXhdLnRpdGxlO1xuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHByaW50VGFza3MoYFRoZSB0YXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICAgIH07XG4gICAgY29uc3QgdHJhbnNmZXJUYXNrID0gKHRhc2tJbmRleCwgeyBkZXN0aW5hdGlvblByb2plY3QgfSkgPT4ge1xuICAgICAgaWYgKCF0YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIik7XG4gICAgICB9XG4gICAgICBpZiAoIXByb2plY3RzW2Rlc3RpbmF0aW9uUHJvamVjdF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsZXQgdGFzayA9IHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XS50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XS5wcmludFRhc2tzKFxuICAgICAgICBgVGFzayBcIiR7dGFzay50aXRsZX1cIiBoYXMgYmVlbiB0cmFuc2ZlcnJlZC5gXG4gICAgICApO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVRhc2sgPSAoaW5kZXgsIHsgZGVzdGluYXRpb24gfSkgPT4ge1xuICAgICAgaWYgKCF0YXNrc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGFza3NbZGVzdGluYXRpb25dKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgICBFcnJvcihcIlRoZSBzZWNvbmQgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbGV0IHRhc2sgPSB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgICAgdGFza3Muc3BsaWNlKGRlc3RpbmF0aW9uLCAwLCB0YXNrKTtcbiAgICAgIHByaW50VGFza3MoXCJUaGUgdGFzayBsaXN0IGhhcyBiZWVuIHJlb3JkZXJlZC5cIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGFza3MsXG4gICAgICBwcmludFRhc2tzLFxuICAgICAgbWFrZVRhc2ssXG4gICAgICByZW1vdmVUYXNrLFxuICAgICAgdHJhbnNmZXJUYXNrLFxuICAgICAgbW92ZVRhc2ssXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeSh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSk7XG4gICAgcHJpbnRQcm9qZWN0cyhcIkEgbmV3IHByb2plY3QgaGFzIGJlZW4gbWFkZS5cIik7XG4gIH07XG5cbiAgY29uc3QgdHJhbnNmZXJQcm9qZWN0ID0gKHByb2plY3RJbmRleCwgeyBkZXN0aW5hdGlvbkNhdGVnb3J5IH0pID0+IHtcbiAgICBpZiAoIWNhdGVnb3JpZXNbZGVzdGluYXRpb25DYXRlZ29yeV0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF07XG4gICAgY2F0ZWdvcmllc1tkZXN0aW5hdGlvbkNhdGVnb3J5XS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGNhdGVnb3JpZXNbZGVzdGluYXRpb25DYXRlZ29yeV0ucHJpbnRQcm9qZWN0cyhcbiAgICAgIGBUaGUgcHJvamVjdCBcIiR7cHJvamVjdC50aXRsZX1cIiBoYXMgYmVlbiB0cmFuc2ZlcmVkLmBcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuYW1lQ2F0ZWdvcnksXG4gICAgZ2V0VGl0bGUsXG4gICAgcHJvamVjdHMsXG4gICAgcHJpbnRQcm9qZWN0cyxcbiAgICBtb3ZlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIG1ha2VQcm9qZWN0LFxuICAgIHRyYW5zZmVyUHJvamVjdCxcbiAgfTtcbn07XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcblxuY29uc3QgbWFrZUNhdGVnb3J5ID0gKHRpdGxlKSA9PiB7XG4gIGxldCBwcm9qZWN0ID0gY2F0ZWdvcnlGYWN0b3J5KHRpdGxlKTtcbiAgY2F0ZWdvcmllcy5wdXNoKHByb2plY3QpO1xuICByZXR1cm4gY2F0ZWdvcmllc1tjYXRlZ29yaWVzLmxlbmd0aCAtIDFdO1xufTtcblxuY29uc3QgcHJpbnRDYXRlZ29yaWVzID0gKG1lc3NhZ2UpID0+IHtcbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coXCJBIGxpc3Qgb2YgYWxsIGNhdGVnb3JpZXM6XCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiKTtcbiAgfVxuICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCIgXCIsXG4gICAgICBgJHtpbmRleH06YCxcbiAgICAgIGNhdGVnb3J5LmdldFRpdGxlKCksXG4gICAgICBgKCR7Y2F0ZWdvcnkucHJvamVjdHMubGVuZ3RofSBwcm9qZWN0cylgXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBtYWtlQ2F0ZWdvcnksIHByaW50Q2F0ZWdvcmllcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZS9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMgfSBmcm9tIFwiLi90by1kby5qc1wiO1xuXG5jb25zdCBkZW1vMSA9IG1ha2VDYXRlZ29yeShcIkRlbW9cIik7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiVG8tZG8gYXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgdG8gc3RvcmUgYWxsIG9mIHlvdXIgdGFza3NcIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzBdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiTG9vayBhcm91bmRcIixcbiAgZGVzY3JpcHRpb246IFwiR2V0IHRvIGtub3cgdGhlIGFwcC5cIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIkV4ZXJjaXNlIHNvbHV0aW9uc1wiLFxuICBkZXNjcmlwdGlvbjogXCJGaWd1cmUgb3V0IGFuIG9wdGltYWwgc2V0dXAgZm9yIGVhY2ggbWFqb3IgbXVzY2xlIGdyb3VwLlwiLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJCdXkgcHVsbGV5c1wiLFxuICBkZXNjcmlwdGlvbjogXCJGb3IgZXhlcmNpc2VzIHRoYXQgcmVxdWlyZSBhbiB1cHdhcmQgZGlyY3Rpb24gb2YgcmVzaXN0YW5jZS5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkdldCB3ZWlnaHQgcGxhdGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbWluaW1hbGlzdGljIHNldCB0aGF0IGFsbG93cyBpbmNyZW1lbnRzIG9mIDVsYi5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkZpbmQgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiVGhpbmdzIGxpa2Ugcm9wZSwgd2ViYmluZywgY2FyaWJpbmVycywgY2hhaW5zLCBmb2FtLi4uIFwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiTWFrZSBzb21lIGVxdWlwbWVudFwiLFxuICBkZXNjcmlwdGlvbjogXCJBc2sgbW9tIHRvIHNldyB0b2dldGhlciBteSBpbnZlbnRpb25zXCIsXG59KTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCIyNTAgYm94IGNoYWxsZW5nZVwiLFxuICBkZXNjcmlwdGlvbjogJ1wiLi4uZHJhdyBhIGJveCAtIHRoZW4gZG8gaXQgYWdhaW4gYW5vdGhlciAyNDkgdGltZXMuXCInLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJGaW5kIGRyYXdpbmcgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiYSBsYXJnZSBzdGFjayBvZiBwcml0ZXIgcGFwZXIgYW5kIGEgLjUgcGVuLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiZHJhdyA1IGJveGVzIG9uIGEgcGFnZVwiLFxuICBkZXNjcmlwdGlvbjogXCI1IGxlYXZlcyBlbm91Z2ggcm9vbSB0byBjaGVjayB0aGUgY29udmVyZ2VuY2VzXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCI1MCUgcnVsZVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkRyYXcgd2hhdGV2ZXIgeW91IHdhbnQgZm9yIHRoZSBzYW1lIGFtb3VudCBvZiB0aW1lIHNwZW50IHByYWN0aWNpbmcuXCIsXG59KTtcblxuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5jb25zdCB3b3JrID0gbWFrZUNhdGVnb3J5KFwiV29ya1wiKTtcblxud29yay5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIkJsb2NrIFdvcmxkXCIsXG4gIGRlc2NyaXB0aW9uOiBcImFuIG9yaWdpbmFsIHNhbmRib3ggZ2FtZSB3aGVyZSBldmVyeXRoaW5nIGlzIGJsb2NreVwiLFxufSk7XG5cbnByaW50Q2F0ZWdvcmllcygpO1xuXG5kZW1vMS50cmFuc2ZlclByb2plY3QoMCwgeyBkZXN0aW5hdGlvbkNhdGVnb3J5OiAxIH0pO1xucHJpbnRDYXRlZ29yaWVzKCk7XG5cbmRlbW8xLnByb2plY3RzWzBdLnByaW50VGFza3MoKTtcbmRlbW8xLnByaW50UHJvamVjdHMoKTtcbmRlbW8xLnByb2plY3RzWzBdLnRyYW5zZmVyVGFzaygwLCB7IGRlc3RpbmF0aW9uUHJvamVjdDogMSB9KTtcblxuZGVtbzEucHJvamVjdHNbMV0udGl0bGUgPSBcIkluc3RpdHV0aW9uYWxpemVkXCI7XG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5cbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLnRpdGxlID0gXCJjaGlsbFwiO1xuZGVtbzEucHJvamVjdHNbMF0udGFza3NbMF0uZGVzY3JpcHRpb24gPSBcInNwYWNlIG91dCB0byBzb21lIGJvcHNcIjtcbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLnByaW9yaXR5ID0gXCJpbXBvcnRhbnRcIjtcbmRlbW8xLnByb2plY3RzWzBdLnByaW50VGFza3MoKTtcblxuZGVtbzEucHJvamVjdHNbMF0ucHJpbnRUYXNrcygpO1xuZGVtbzEucHJvamVjdHNbMF0ubW92ZVRhc2soMSwgeyBkZXN0aW5hdGlvbjogMiB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==