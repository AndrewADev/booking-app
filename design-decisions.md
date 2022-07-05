# Design decisions

This document explains some of the most important design decisions made while developing the application.

## FE

### Create-React-App

Create React App (CRA) was chosen for its 'batteries-included' approach to development, allowing generation of a ready-to run React application.

CRA includes many sensible defaults and has templates for a number of common use-cases (TypeScript, PWA, Redux, etc), though it often suffers from delayed and infrequent updates, and 'hides' much of the configuration from developers.

That said, it also offers the ability to expose all necessary configuration via what it calls `ejecting`, which allows the user to take over details such as Webpack configuration. So, there are 'escape hatches' if a project grows in a direction where more frequent updates are needed, or configuration is needed that is too specific for any of the available methods for overriding default settings (not all of which are officially supported).


## BE

### Vanilla Express

In the case, we opt for a Vanilla Express configuration due to the overhead associated with learning (rather extensive) new tools, that border on their own ecosystem. (Both AdonisJS and Nx were considered in this regard, and deemed too complicated for the alloted timeframe).