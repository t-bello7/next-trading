import * as nextRouter from "next/router";
type MockUseRouterParams = Partial<nextRouter.NextRouter>;

export const mockUseRouter = ({
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    basePath = "",
    locale = "",
    locales = [],
    defaultLocale = "",
  }: MockUseRouterParams) => {
    const actions = {
      push: jest.fn(() => Promise.resolve(true)),
      replace: jest.fn(() => Promise.resolve(true)),
      reload: jest.fn(() => Promise.resolve(true)),
      prefetch: jest.fn(() => Promise.resolve()),
      back: jest.fn(() => Promise.resolve(true)),
      beforePopState: jest.fn(() => Promise.resolve(true)),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  
    (nextRouter.useRouter as jest.Mock) = jest.fn(() => ({
      route,
      pathname,
      query,
      asPath,
      basePath,
      locale,
      locales,
      defaultLocale,
      ...actions,
    }));
  
    return actions;
  };