/**
 * @copyright 移动招聘前端技术部
 * @mail md.fe@58ganji.com
 */

function help(argv) {
    console.log('\nUsage: robot [command]\n');
    console.log(
`command:
    help              print mer command info
    init              init project
    create            create child project
    dev <entry>       Enter the development mode  <param entry is necessary>
`
    );
    process.exit(0);
}

module.exports = help;