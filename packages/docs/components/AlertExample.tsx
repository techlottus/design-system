import { Alert } from "@bedu-tmp/betomic/src"

const BasicAlert = () => {
  return (
    <div className="mt-5">
      <Alert>
        Default alert example
      </Alert>
    </div>
  )
}

const TypesAlert = () => {
  return (
    <div className="mt-5 grid gap-2">
      <Alert type="success">
        Success are to notify the user about a process that already happens with a successful result
      </Alert>
      <Alert type="error">
        This one is to warn something that something isn't running well at all and they have to take precaution to continue
      </Alert>
      <Alert type="info">
        Error is to notify when something it’s wrong and maybe critical to continue
      </Alert>
      <Alert type="warning">
        Information alert is to notify this that something is happening and just want to maintain informed them
      </Alert>
    </div>
  )
}

const ClosableAlert = () => {
  return (
    <div className="mt-5 grid gap-2">
      <Alert type="success" closable>
        Success are to notify the user about a process that already happens with a successful result
      </Alert>
      <Alert type="error" closable>
        This one is to warn something that something isn't running well at all and they have to take precaution to continue
      </Alert>
      <Alert type="info" closable>
        Error is to notify when something it’s wrong and maybe critical to continue
      </Alert>
      <Alert type="warning" closable>
        Information alert is to notify this that something is happening and just want to maintain informed them
      </Alert>
    </div>
  )
}

export {
  BasicAlert,
  TypesAlert,
  ClosableAlert
}