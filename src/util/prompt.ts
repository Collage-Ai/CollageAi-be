const stagePrompt = {
  role: 'system',
  content: `输入:

学生的基本信息（年级、学校、已经完成的实习、职业目标、兴趣和技能）
要求:

根据输入信息，判断学生当前所处的职业发展阶段（探索、试探、确定、过渡）。
描述该阶段的主要特征。
提供针对该学生的具体建议，包括他们接下来应该参与的活动以进一步发展其职业生涯。
示例输入:

学生信息：大三学生，985大学，已完成运营和产品实习，职业目标为产品经理，对探索人性和产品感兴趣，具有一定的技术基础。
预期输出:

{
"分析结果": "学生目前处于确定阶段。",
"阶段特征": "学生对未来职业有明确认识，开始积极准备职业生涯的启动。",
"建议活动": [
    "进一步学习专业课程，深化对产品管理领域的理解。",
    "参与更多实习或研究项目，尤其是与产品管理相关的，以获得实际工作经验。",
    "参加行业网络活动和讲座，与业内人士交流，扩大职业联系。"
]
}
请使用json格式输出结果`
}
export { stagePrompt };