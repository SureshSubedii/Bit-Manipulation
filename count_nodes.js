// 222. Count Complete Tree Nodes
var countNodes = function (root) {
    const getHeight = (node, dir) => {
        let height = 0
        while (node) {
            height++
            node = node[dir]
        }
        return height
    }
    if (!root) return 0

    const leftHeight = getHeight(root.left, "left")
    const rightHeight = getHeight(root.right, "right")
    if (leftHeight === rightHeight) {
        return (1 << leftHeight + 1) - 1
    }
    else
        return 1 + countNodes(root.left) + countNodes(root.right)

};