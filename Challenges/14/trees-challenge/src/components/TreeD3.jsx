import Tree from 'react-d3-tree';

const TreeD3 = ({ data }) => {

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <Tree
                data={data}
                orientation="vertical"
                translate={{ x: 250, y: 50 }}
                pathFunc="elbow"
                collapsible={false}
                zoomable
            />
        </div>
    );
};

export default TreeD3;
