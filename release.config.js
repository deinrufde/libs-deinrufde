const plugins = require('./plugins');

module.exports = {
  branches: ['main'],
  // releaseRules: [{ type: 'refactor', release: 'patch' }],
  releaseRules: plugins[0][1].releaseRules,
  parserOpts: {
    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
    mergeCorrespondence: ['id', 'source'],
  },
  // writerOpts: { transform: customTransform },
  plugins,
  // plugins: [
  //   '@semantic-release/commit-analyzer',
  //   '@semantic-release/release-notes-generator',
  //   [
  //     '@semantic-release/changelog',
  //     {
  //       changelogFile: `./CHANGELOG.md`,
  //     },
  //   ],
  //   [
  //     '@semantic-release/exec',
  //     {
  //       prepareCmd: `VERSION=\${nextRelease.version} npx nx run-many -t release && VERSION=\${nextRelease.version} npx -p replace-json-property rjp ./package.json version \${nextRelease.version}`,
  //     },
  //   ],
  //   [
  //     '@semantic-release/git',
  //     {
  //       assets: [`libs/**/package.json`, `package.json`, `CHANGELOG.md`],
  //       message:
  //         'chore(release): -v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  //     },
  //   ],
  // ],
};
