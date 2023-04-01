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
    const moveTask = (positionA, positionB) => {
      if (!tasks[positionA]) {
        return console.log(
          Error("The first specified task index is out of range.")
        );
      }
      if (!tasks[positionB]) {
        return console.log(
          Error("The second specified task index is out of range.")
        );
      }
      let task = tasks.splice(positionA, 1)[0];
      tasks.splice(positionB, 0, task);
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

demo1.printProjects();
demo1.moveProject(3, { destination: 1 });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxhQUFhLHVEQUFZOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBEQUFlOztBQUVmLDJCQUEyQix3QkFBd0I7QUFDbkQsMERBQWU7O0FBRWY7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2RlZmF1bHQuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtL3RvLWRvLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY2F0ZWdvcnlGYWN0b3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHJlbmFtZUNhdGVnb3J5ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRpdGxlIGlzIG5vdCBhIHN0cmluZy5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdGVnb3J5ID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGxldCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcmludFByb2plY3RzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgJHtjYXRlZ29yeX0gOiBlbXB0eWApO1xuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2NhdGVnb3J5fSAtIEEgbGlzdCBvZiBhbGwgcHJvamVjdHM6YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2NhdGVnb3J5fSAtICR7bWVzc2FnZX1gKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcm9qZWN0ID0gKGluZGV4LCB7IGRlc3RpbmF0aW9uIH0pID0+IHtcbiAgICBpZiAoIXByb2plY3RzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgIH1cbiAgICBpZiAoIXByb2plY3RzW2Rlc3RpbmF0aW9uXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIik7XG4gICAgfVxuICAgIGxldCBvYmplY3RBID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZGVzdGluYXRpb24sIDAsIG9iamVjdEEpO1xuICAgIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlRoZSBzcGVjaWZpZWQgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICB9XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdHNbaW5kZXhdLnRpdGxlO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcHJpbnRQcm9qZWN0cyhgUHJvamVjdCBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbiAgfTtcblxuICBjb25zdCB0YXNrRmFjdG9yeSA9ICh7XG4gICAgdGl0bGUgPSBcIlwiLFxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgICBkdWVEYXRlID0gXCJcIixcbiAgICBwcmlvcml0eSA9IFwiXCIsXG4gIH0pID0+IHtcbiAgICBsZXQgdGFza1N0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGNoZWNrQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiBjb21wbGV0ZWQuIDpEYCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuIDovYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgY2hlY2tDb21wbGV0aW9uU3RhdHVzLFxuICAgICAgY2hhbmdlQ29tcGxldGlvblN0YXR1cyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHsgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIgfSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgcHJpbnRUYXNrcyA9IChtZXNzYWdlID0gYEEgbGlzdCBvZiBhbGwgdGFza3M6YCkgPT4ge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gRXJyb3IoYFRoZXJlIGFyZSBubyB0YXNrcyBpbiBcIiR7dGl0bGV9XCIuYCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gLyAke3RpdGxlfSAtICR7bWVzc2FnZX1gKTtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgdGFzayk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IG1ha2VUYXNrID0gKHRhc2sgPSB7fSkgPT4ge1xuICAgICAgdGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgICBwcmludFRhc2tzKGBBIG5ldyB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIFwiJHt0aXRsZX1cIi5gKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgIGlmICghdGFza3NbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIik7XG4gICAgICB9XG4gICAgICBsZXQgdGl0bGUgPSB0YXNrc1tpbmRleF0udGl0bGU7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcHJpbnRUYXNrcyhgVGhlIHRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG4gICAgfTtcbiAgICBjb25zdCB0cmFuc2ZlclRhc2sgPSAodGFza0luZGV4LCB7IGRlc3RpbmF0aW9uUHJvamVjdCB9KSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGxldCB0YXNrID0gdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgICBwcm9qZWN0c1tkZXN0aW5hdGlvblByb2plY3RdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICBwcm9qZWN0c1tkZXN0aW5hdGlvblByb2plY3RdLnByaW50VGFza3MoXG4gICAgICAgIGBUYXNrIFwiJHt0YXNrLnRpdGxlfVwiIGhhcyBiZWVuIHRyYW5zZmVycmVkLmBcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlVGFzayA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICAgICAgaWYgKCF0YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgICBFcnJvcihcIlRoZSBmaXJzdCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tzW3Bvc2l0aW9uQl0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsZXQgdGFzayA9IHRhc2tzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICAgICAgdGFza3Muc3BsaWNlKHBvc2l0aW9uQiwgMCwgdGFzayk7XG4gICAgICBwcmludFRhc2tzKFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWQuXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHRhc2tzLFxuICAgICAgcHJpbnRUYXNrcyxcbiAgICAgIG1ha2VUYXNrLFxuICAgICAgcmVtb3ZlVGFzayxcbiAgICAgIHRyYW5zZmVyVGFzayxcbiAgICAgIG1vdmVUYXNrLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkpO1xuICAgIHByaW50UHJvamVjdHMoXCJBIG5ldyBwcm9qZWN0IGhhcyBiZWVuIG1hZGUuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyUHJvamVjdCA9IChwcm9qZWN0SW5kZXgsIHsgZGVzdGluYXRpb25DYXRlZ29yeSB9KSA9PiB7XG4gICAgaWYgKCFjYXRlZ29yaWVzW2Rlc3RpbmF0aW9uQ2F0ZWdvcnldKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICAgIGNhdGVnb3JpZXNbZGVzdGluYXRpb25DYXRlZ29yeV0ucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjYXRlZ29yaWVzW2Rlc3RpbmF0aW9uQ2F0ZWdvcnldLnByaW50UHJvamVjdHMoXG4gICAgICBgVGhlIHByb2plY3QgXCIke3Byb2plY3QudGl0bGV9XCIgaGFzIGJlZW4gdHJhbnNmZXJlZC5gXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmFtZUNhdGVnb3J5LFxuICAgIGdldFRpdGxlLFxuICAgIHByb2plY3RzLFxuICAgIHByaW50UHJvamVjdHMsXG4gICAgbW92ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBtYWtlUHJvamVjdCxcbiAgICB0cmFuc2ZlclByb2plY3QsXG4gIH07XG59O1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IG1ha2VDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNhdGVnb3J5RmFjdG9yeSh0aXRsZSk7XG4gIGNhdGVnb3JpZXMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IHByaW50Q2F0ZWdvcmllcyA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBsaXN0IG9mIGFsbCBjYXRlZ29yaWVzOlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XG4gIH1cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiIFwiLFxuICAgICAgYCR7aW5kZXh9OmAsXG4gICAgICBjYXRlZ29yeS5nZXRUaXRsZSgpLFxuICAgICAgYCgke2NhdGVnb3J5LnByb2plY3RzLmxlbmd0aH0gcHJvamVjdHMpYFxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdG8tZG8uanNcIjtcblxuY29uc3QgZGVtbzEgPSBtYWtlQ2F0ZWdvcnkoXCJEZW1vXCIpO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIlRvLWRvIGFwcFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIHRvIHN0b3JlIGFsbCBvZiB5b3VyIHRhc2tzXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkxvb2sgYXJvdW5kXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdldCB0byBrbm93IHRoZSBhcHAuXCIsXG59KTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJFeGVyY2lzZSBzb2x1dGlvbnNcIixcbiAgZGVzY3JpcHRpb246IFwiRmlndXJlIG91dCBhbiBvcHRpbWFsIHNldHVwIGZvciBlYWNoIG1ham9yIG11c2NsZSBncm91cC5cIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiQnV5IHB1bGxleXNcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIGV4ZXJjaXNlcyB0aGF0IHJlcXVpcmUgYW4gdXB3YXJkIGRpcmN0aW9uIG9mIHJlc2lzdGFuY2UuXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJHZXQgd2VpZ2h0IHBsYXRlc1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIG1pbmltYWxpc3RpYyBzZXQgdGhhdCBhbGxvd3MgaW5jcmVtZW50cyBvZiA1bGIuXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJGaW5kIHN1cHBsaWVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBsaWtlIHJvcGUsIHdlYmJpbmcsIGNhcmliaW5lcnMsIGNoYWlucywgZm9hbS4uLiBcIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIk1ha2Ugc29tZSBlcXVpcG1lbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQXNrIG1vbSB0byBzZXcgdG9nZXRoZXIgbXkgaW52ZW50aW9uc1wiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcIi4uLmRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiRmluZCBkcmF3aW5nIHN1cHBsaWVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgbGFyZ2Ugc3RhY2sgb2YgcHJpdGVyIHBhcGVyIGFuZCBhIC41IHBlbi5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcImRyYXcgNSBib3hlcyBvbiBhIHBhZ2VcIixcbiAgZGVzY3JpcHRpb246IFwiNSBsZWF2ZXMgZW5vdWdoIHJvb20gdG8gY2hlY2sgdGhlIGNvbnZlcmdlbmNlc1wiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiNTAlIHJ1bGVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEcmF3IHdoYXRldmVyIHlvdSB3YW50IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSBzcGVudCBwcmFjdGljaW5nLlwiLFxufSk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcblxuY29uc3Qgd29yayA9IG1ha2VDYXRlZ29yeShcIldvcmtcIik7XG5cbndvcmsubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJCbG9jayBXb3JsZFwiLFxuICBkZXNjcmlwdGlvbjogXCJhbiBvcmlnaW5hbCBzYW5kYm94IGdhbWUgd2hlcmUgZXZlcnl0aGluZyBpcyBibG9ja3lcIixcbn0pO1xuXG5wcmludENhdGVnb3JpZXMoKTtcblxuZGVtbzEudHJhbnNmZXJQcm9qZWN0KDAsIHsgZGVzdGluYXRpb25DYXRlZ29yeTogMSB9KTtcbnByaW50Q2F0ZWdvcmllcygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5kZW1vMS5wcm9qZWN0c1swXS50cmFuc2ZlclRhc2soMCwgeyBkZXN0aW5hdGlvblByb2plY3Q6IDEgfSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLnRpdGxlID0gXCJJbnN0aXR1dGlvbmFsaXplZFwiO1xuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS50aXRsZSA9IFwiY2hpbGxcIjtcbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLmRlc2NyaXB0aW9uID0gXCJzcGFjZSBvdXQgdG8gc29tZSBib3BzXCI7XG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS5wcmlvcml0eSA9IFwiaW1wb3J0YW50XCI7XG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcbmRlbW8xLm1vdmVQcm9qZWN0KDMsIHsgZGVzdGluYXRpb246IDEgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=