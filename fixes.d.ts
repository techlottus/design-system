/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 * in formik, react-mapbox-gl
 */
import react from "react";
declare namespace React {
  type StatelessComponent<P> = react.FunctionComponent<P>;
}