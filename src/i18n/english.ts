export default {
  settings: {
    title: "Settings",
    selectLang: "Select your preferred language",
  },
  about: {
    contributor: "Contributor",
    links: "Links",
    maintainer: "Maintainer",
    serviceLearning2022: "NTNU CSIE Service Learning 2022 Fall",
    serviceLearning2021: "NTNU CSIE Service Learning 2021 Spring",
    swe2019: "Red Team of Software Engineering 2019 Fall",
  },
  course: {
    ann: {
      index: {
        title: "Announcements",
        err: "Oops! Something went wrong when loading announcements.",
        table: {
          title: "Title",
          author: "Author",
          time: "Create At",
        },
        new: "New",
      },
      new: {
        title: "New Announcement",
        preview: "Preview",
      },
    },
    hw: {
      index: {
        title: "Homeworks",
        new: "New",
        err: "Oops! Something went wrong when loading homeworks.",
      },
      new: {
        title: "New Homework",
        preview: "Preview",
      },
    },
    problem: {
      new: {
        title: "New Problem",
        preview: "Preview",
        json: "JSON（for developer）",
      },
      submit: {
        err: {
          code: "Please paste your source code to submit.",
          lang: "Please select the programming language.",
          msg: "Oops! Something went wrong when submitting the code. Try again later.",
        },
        card: {
          title: "Submit to problem #",
          placeholder: "Paste your code here",
        },
        lang: {
          text: "Language",
          select: "Select language",
        },
        text: "Submit",
      },
      stats: {
        pieTitle: "Submission Result",
        title: "Stats for problem #",
        general: {
          tried: "Num of users tried",
          ac: "Num of AC users",
          acRatio: "AC Submission Ratio",
          avg: "Average Score",
          sd: "Standard Deviation",
        },
        table: {
          runtimeRank: {
            title: "Top 10 Run Time",
            id: "#",
            user: "User",
            runtime: "Run Time",
            time: "Time",
          },
          memoryRank: {
            title: "Top 10 Memory Usage",
            id: "#",
            user: "User",
            memory: "Memory Usage",
            time: "Time",
          },
        },
      },
    },
    problems: {
      text: "Problems",
      id: "ID",
      name: "Name",
      tags: "Tags",
      quota: "Quota",
      new: "New",
    },
    submissions: {
      text: "Submissions",
      problem: "Problem",
      status: "Status",
      lang: "Language",
      clear: "Clear",
      table: {
        id: "id",
        pid: "pid",
        user: "user",
        result: "result",
        score: "score",
        runtime: "run time",
        memory: "memory",
        lang: "lang",
        time: "time",
      },
    },
    submission: {
      title: "Submission ID: ",
      general: {
        title: "General",
        problem: "Problem",
        user: "User",
        status: "Status",
        runtime: "Run Time",
        memory: "Memory",
        score: "Score",
        lang: "Lang",
        time: "Time",
      },
      detail: {
        title: "Detail",
        desc: "Pending submission will be refetched automatically.",
        id: "#",
        status: "Status",
        runtime: "Run Time",
        memory: "Memory",
        score: "Score",
        overall: "Overall",
        result: {
          hide: "Hide all results",
          show: "Show all results",
        },
      },
      source: {
        text: "Source",
        copied: "Copied!",
        copy: "Copy",
      },
    },
    members: {
      title: "Members",
      new: "New Members",
      sortBy: "Sort By",
      cancel: "Cancel",
      submit: "Submit",
      csvUploadHint1:
        "Please upload a CSV file to add members, the first row (header) of the csv could contain:",
      csvUploadHint2: "from the second row, place one member's data in one row",
    },
  },
  courses: {
    index: {
      list: "Course List",
      table: {
        course: "Course",
        teacher: "Teacher",
      },
      new: "New",
    },
    new: {
      title: "New Course",
      nameField: "Course Name",
      teacherField: "Teacher",
      submit: "Submit",
    },
  },
  profile: {
    title: "Profile",
    rules: {
      confirmPassword: {
        sameAsRef: "Password does not match.",
      },
    },
    username: "Username",
    dispname: "Display Name",
    email: "Email",
    role: "Role",
    pw: {
      change: "Change Password",
      success: "Password has been successfully changed",
      new: "New Password",
      confirm: "Confirm New Password",
      current: "Current Password",
      placeholder: {
        new: "new password",
        again: "new password again",
        current: "current password",
      },
      submit: "Submit",
    },
  },
  ann: {
    id: {
      back: "Back",
    },
  },
  components: {
    ann: {
      form: {
        titleField: "Title",
        pinToggle: "Pin to top",
        descField: "Description",
        submit: "Submit",
      },
      card: {
        lastUpdate: "Last updated: {time}",
        postBy: "Posted by {author} at {time}",
      },
    },
    hw: {
      form: {
        nameField: "Name",
        problems: "Problems",
        fromField: "From",
        dueField: "Due",
        descField: "Description",
        submit: "Submit",
      },
      card: {
        statusLabel: {
          running: "RUNNING",
          notStart: "NOT START",
          over: "OVER",
        },
        availability: {
          text: "Availability",
          from: "From",
          due: "Due",
        },
        problems: {
          text: "Problems",
          id: "#",
          pid: "PID",
          name: "Name",
          quota: "Quota",
          score: "Score",
          stats: "Stats",
          copycat: "Copycat",
        },
        description: {
          text: "Description",
          edit: "Edit",
          stats: "Stats",
        },
      },
      hwForm: {},
    },
    problem: {
      forms: {
        nameField: "Name",
        hiddenToggle: "Hidden",
        quotaField: "Quota",
        quotaHint: "Set -1 for unlimited quota",
        tags: "Tags",
        tagsHint: "Separate with COMMA, e.g. HW1,HW2",
        type: "Type",
        allowedLangs: "Allowed Languages",
        testdata: "Testdata",
        howToPack: "How to pack testdata",
        dropFile: "Drop File here or Choose File to upload",
        subtask: "Subtask {no}",
        numOfCases: "The number of testcases",
        score: "Score",
        memoryLimit: "Memory Limit (KB)",
        timeLimit: "Time Limit (ms)",
        submit: "Submit",
        probDescForm: {
          desc: "Description",
          input: "Input",
          output: "Output",
          hint: "Hint",
          err: {
            input: "Sample Input Error: ",
            output: "Sample Output Error: ",
          },
          sample: {
            input: "Sample Input ",
            output: "Sample Output ",
          },
        },
        testdataRule1:
          "Put all the input/output files in a single `.zip` file, and follow the naming rules below.",
        testdataRule2:
          'Name the input file as "sstt.in", where "ss" represents the number of subtasks it belongs to, and "tt" represents which testcase it is in subtask.',
        testdataRule3:
          'Similarly, name the ouput file as "sstt.out", NOTE THAT "ss" & "tt" are zero-indexed.',
        testdataRule4:
          "For example, a problem with 3 subtasks, and the number of testcases of each subtask is 3, 5, 15, respectively.",
        testdataRule5: "The content of zip file is:",
        gotIt: "Got it",
      },
      card: {
        title: "Problem #",
        quota: "Quota",
        score: "Score",
        submit: "Submit",
        stats: "Stats",
        desc: "Description",
        input: "Input",
        output: "Output",
        ex: "Examples",
        sample: {
          id: "#",
          input: "Input",
          output: "Output",
          no: {
            input: "no input",
            output: "no output",
          },
        },
        hint: "Hint",
        subtasks: {
          title: "Subtasks",
          id: "#",
          tl: "Time Limit",
          ml: "Memory Limit",
          score: "Score",
        },
        noContent: "no content",
      },
    },
    courseSideBar: {
      ann: "Announcements",
      hw: "Homeworks",
      problems: "Problems",
      submissions: "Submissions",
      members: "Members",
    },
    systemAnn: {
      ann: "Announcements",
      title: "Title",
      createTime: "Create At",
    },
    loginSection: {
      welcome: "Welcome back, ",
      signin: "Sign in",
      loginFailed: "Login Failed: Your username/email or password is incorrect",
      username: "Username / Email",
      pw: "Password",
      placeholder: {
        username: "username or email",
        pw: "password",
      },
      forgot: "Forgot password?",
      button: "Sign In",
    },
    sideBar: {
      home: "Home",
      course: "Course",
      about: "About",
      admin: "Admin",
      profile: "Profile",
    },
    dueCountdown: {
      days: "days",
      hours: "hours",
      min: "min",
      sec: "sec",
    },
    markdownRenderer: {
      noContent: "no content",
    },
  },
  constant: {
    submissionStatus: {
      pending: "Pending",
      ac: "Accepted",
      wa: "Wrong Answer",
      ce: "Compile Error",
      tle: "Time Limit Exceed",
      mle: "Memory Limit Exceed",
      re: "Runtime Error",
      je: "Judge Error",
      ole: "Output Limit Exceed",
    },
  },
};
