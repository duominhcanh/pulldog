"use server";

import { decrypt } from "@/lib/crypto";
import { getProvider } from "@/lib/git-provider";
import { cookies } from "next/headers";
import { getAccounts } from "../account/actions";
import { BoardData, BoardFilters } from "./schema";

export async function getBoardData(): Promise<BoardData> {
  return {
    repositories: [
      {
        id: 62550216,
        webUrl: "https://gitlab.com/alteos/services/webhook",
        name: "webhook",
        owner: {
          id: 3689605,
          login: "alteos/services",
          name: "services",
          avatarUrl: undefined,
          webUrl: "https://gitlab.com/groups/alteos/services",
        },
        pulls: [
          {
            id: 363226713,
            number: 21,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/services/webhook/-/merge_requests/21",
            name: "Mega 1643 refactor dockerfile",
            assignees: [
              {
                id: 23139455,
                login: "ale59",
                name: "Alejandro Heredia",
                avatarUrl:
                  "https://gitlab.com/uploads/-/system/user/avatar/23139455/avatar.png",
                webUrl: "https://gitlab.com/ale59",
              },
            ],
            author: {
              id: 23139455,
              login: "ale59",
              name: "Alejandro Heredia",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/23139455/avatar.png",
              webUrl: "https://gitlab.com/ale59",
            },
          },
          {
            id: 357960262,
            number: 18,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/services/webhook/-/merge_requests/18",
            name: "test",
            assignees: [],
            author: {
              id: 11967613,
              login: "ham13",
              name: "Hammad Ali",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/11967613/avatar.png",
              webUrl: "https://gitlab.com/ham13",
            },
          },
        ],
      },
      {
        id: 62127761,
        webUrl: "https://gitlab.com/alteos/qa/e2e-product-tests",
        name: "e2e-product-tests",
        owner: {
          id: 5258771,
          login: "alteos/qa",
          name: "qa",
          avatarUrl: undefined,
          webUrl: "https://gitlab.com/groups/alteos/qa",
        },
        pulls: [
          {
            id: 353628506,
            number: 147,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/qa/e2e-product-tests/-/merge_requests/147",
            name: "Fix email name",
            assignees: [],
            author: {
              id: 5265260,
              login: "arr2",
              name: "Artur Rybak",
              avatarUrl:
                "https://secure.gravatar.com/avatar/60a8fbc46b4259110e67ef21ca40a019d83aa626a96a0c9fcb9ba7ccf8325d94?s=80&d=identicon",
              webUrl: "https://gitlab.com/arr2",
            },
          },
        ],
      },
      {
        id: 59565841,
        webUrl: "https://gitlab.com/alteos/frontends/keller",
        name: "Keller",
        owner: {
          id: 4016872,
          login: "alteos/frontends",
          name: "frontends",
          avatarUrl: undefined,
          webUrl: "https://gitlab.com/groups/alteos/frontends",
        },
        pulls: [
          {
            id: 324228613,
            number: 14,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/keller/-/merge_requests/14",
            name: "Bro 1766: Create commission relationship and rate",
            assignees: [],
            author: {
              id: 12714257,
              login: "jos24",
              name: "Joshua Boateng",
              avatarUrl:
                "https://secure.gravatar.com/avatar/d453f73ed30bf9bbaef571b6249adceec7facacd6f5a0a6260caf9845ae012cc?s=80&d=identicon",
              webUrl: "https://gitlab.com/jos24",
            },
          },
        ],
      },
      {
        id: 57256254,
        webUrl: "https://gitlab.com/alteos/boilerplates/mega-templates",
        name: "mega-templates",
        owner: {
          id: 84606239,
          login: "alteos/boilerplates",
          name: "boilerplates",
          avatarUrl: undefined,
          webUrl: "https://gitlab.com/groups/alteos/boilerplates",
        },
        pulls: [
          {
            id: 308472812,
            number: 10,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/boilerplates/mega-templates/-/merge_requests/10",
            name: "add axios mock",
            assignees: [],
            author: {
              id: 10779614,
              login: "alm13",
              name: "Aleh Maisevich",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/10779614/avatar.png",
              webUrl: "https://gitlab.com/alm13",
            },
          },
          {
            id: 306380009,
            number: 9,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/boilerplates/mega-templates/-/merge_requests/9",
            name: "fixing name and location of the file: input data validation pipe",
            assignees: [],
            author: {
              id: 11967613,
              login: "ham13",
              name: "Hammad Ali",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/11967613/avatar.png",
              webUrl: "https://gitlab.com/ham13",
            },
          },
        ],
      },
      {
        id: 54396745,
        webUrl: "https://gitlab.com/alteos/whac-a-bug",
        name: "whac-a-bug",
        owner: {
          id: 2797854,
          login: "alteos",
          name: "Alteos",
          avatarUrl:
            "/uploads/-/system/group/avatar/2797854/alteos-gmb-h-logo-l.png",
          webUrl: "https://gitlab.com/groups/alteos",
        },
        pulls: [
          {
            id: 319373992,
            number: 9,
            draft: false,
            state: "open",
            webUrl: "https://gitlab.com/alteos/whac-a-bug/-/merge_requests/9",
            name: "BRO-1592 -  Include redundancy layer to avoid changing subdomain if partnerId isnt defined",
            assignees: [],
            author: {
              id: 18568328,
              login: "ariel-alteos",
              name: "Ariel Rodrigues",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/18568328/avatar.png",
              webUrl: "https://gitlab.com/ariel-alteos",
            },
          },
        ],
      },
      {
        id: 47423483,
        webUrl: "https://gitlab.com/alteos/frontends/partner-policy-ui",
        name: "partner-policy-ui",
        owner: {
          id: 4016872,
          login: "alteos/frontends",
          name: "frontends",
          avatarUrl: undefined,
          webUrl: "https://gitlab.com/groups/alteos/frontends",
        },
        pulls: [
          {
            id: 364356737,
            number: 108,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/108",
            name: "feat: PPORT-32 Handle forbidden error globally",
            assignees: [
              {
                id: 25759664,
                login: "canh-ext",
                name: "Canh Duong",
                avatarUrl:
                  "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
                webUrl: "https://gitlab.com/canh-ext",
              },
            ],
            author: {
              id: 25759664,
              login: "canh-ext",
              name: "Canh Duong",
              avatarUrl:
                "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
              webUrl: "https://gitlab.com/canh-ext",
            },
          },
          {
            id: 363945212,
            number: 107,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/107",
            name: "fix: PPORT-22 Policy table header and translations",
            assignees: [
              {
                id: 25759664,
                login: "canh-ext",
                name: "Canh Duong",
                avatarUrl:
                  "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
                webUrl: "https://gitlab.com/canh-ext",
              },
            ],
            author: {
              id: 25759664,
              login: "canh-ext",
              name: "Canh Duong",
              avatarUrl:
                "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
              webUrl: "https://gitlab.com/canh-ext",
            },
          },
          {
            id: 363849036,
            number: 106,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/106",
            name: "feat: Add GitHub Workflows",
            assignees: [
              {
                id: 12702812,
                login: "prp2022",
                name: "Priyankar Prasad",
                avatarUrl:
                  "https://gitlab.com/uploads/-/system/user/avatar/12702812/avatar.png",
                webUrl: "https://gitlab.com/prp2022",
              },
            ],
            author: {
              id: 12702812,
              login: "prp2022",
              name: "Priyankar Prasad",
              avatarUrl:
                "https://gitlab.com/uploads/-/system/user/avatar/12702812/avatar.png",
              webUrl: "https://gitlab.com/prp2022",
            },
          },
          {
            id: 363674543,
            number: 105,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/105",
            name: "PPORT-21 Claim date instead of claims date in claims tab",
            assignees: [
              {
                id: 25759564,
                login: "khang-ext",
                name: "Khang Tuong",
                avatarUrl:
                  "https://secure.gravatar.com/avatar/b52f5d824aecf9b625f57155d0f0521e3a8be916f9312d40e12ff49337c4492e?s=80&d=identicon",
                webUrl: "https://gitlab.com/khang-ext",
              },
            ],
            author: {
              id: 25759564,
              login: "khang-ext",
              name: "Khang Tuong",
              avatarUrl:
                "https://secure.gravatar.com/avatar/b52f5d824aecf9b625f57155d0f0521e3a8be916f9312d40e12ff49337c4492e?s=80&d=identicon",
              webUrl: "https://gitlab.com/khang-ext",
            },
          },
          {
            id: 363659440,
            number: 104,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/104",
            name: "fix: PPORT-24 Sidebar button highlighting",
            assignees: [
              {
                id: 25759664,
                login: "canh-ext",
                name: "Canh Duong",
                avatarUrl:
                  "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
                webUrl: "https://gitlab.com/canh-ext",
              },
            ],
            author: {
              id: 25759664,
              login: "canh-ext",
              name: "Canh Duong",
              avatarUrl:
                "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
              webUrl: "https://gitlab.com/canh-ext",
            },
          },
          {
            id: 362307503,
            number: 101,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/101",
            name: "feat PARTPORT-15 Policy claim details",
            assignees: [
              {
                id: 25759664,
                login: "canh-ext",
                name: "Canh Duong",
                avatarUrl:
                  "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
                webUrl: "https://gitlab.com/canh-ext",
              },
            ],
            author: {
              id: 25759664,
              login: "canh-ext",
              name: "Canh Duong",
              avatarUrl:
                "https://secure.gravatar.com/avatar/860379a054cf413f1256e615dbbd4f03f4f2eeb0f6d08df4b603e295000504f2?s=80&d=identicon",
              webUrl: "https://gitlab.com/canh-ext",
            },
          },
          {
            id: 259302286,
            number: 37,
            draft: false,
            state: "open",
            webUrl:
              "https://gitlab.com/alteos/frontends/partner-policy-ui/-/merge_requests/37",
            name: "Trigger build",
            assignees: [],
            author: {
              id: 12714257,
              login: "jos24",
              name: "Joshua Boateng",
              avatarUrl:
                "https://secure.gravatar.com/avatar/d453f73ed30bf9bbaef571b6249adceec7facacd6f5a0a6260caf9845ae012cc?s=80&d=identicon",
              webUrl: "https://gitlab.com/jos24",
            },
          },
        ],
      },
    ],
  };

  let allRepos = [];
  const securedAccounts = await getAccounts();
  const filters = await getFilters();
  const accounts = securedAccounts.map((account) => ({
    token: decrypt(account.token),
    provider: account.provider,
  }));

  for (const account of accounts) {
    const provider = getProvider(account.provider);

    const repos = await provider.listRepos({
      token: account.token,
      options: { starred: filters.starred },
    });

    const pullsPromises = repos.map(async (repo) => {
      const pulls = await provider.listPullRequests({
        token: account.token,
        owner: account.provider === "github" ? repo.owner!.login : undefined,
        repo: account.provider === "github" ? repo.name! : repo.id!,
      });

      return { id: repo.id, pulls };
    });

    const pullsData = await Promise.all(pullsPromises);

    const repoWithPulls = repos.map((repo) => ({
      ...repo,
      pulls: pullsData.find((pull) => pull.id === repo.id)?.pulls,
    }));

    allRepos.push(...repoWithPulls);
  }

  if (!filters.empty) {
    allRepos = allRepos.filter((repo) => (repo.pulls?.length || 0) > 0);
  }

  return {
    repositories: allRepos as BoardData["repositories"],
  };
}

export async function setFilters({
  empty,
  starred,
}: {
  empty: boolean;
  starred: boolean;
}) {
  const cookieStore = await cookies();

  cookieStore.set("board-filters", JSON.stringify({ empty, starred }), {
    maxAge: Number.MAX_SAFE_INTEGER,
  });
}

export async function getFilters(): Promise<BoardFilters> {
  const cookieStore = await cookies();

  if (!cookieStore.has("board-filters")) {
    return { empty: false, starred: false };
  }

  const cookie = cookieStore.get("board-filters");
  const filters = JSON.parse(cookie!.value);

  return filters;
}
