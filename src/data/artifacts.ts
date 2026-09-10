export type ArtifactRecord = {
  title: string;
  context: string;
  links: { label: string; url: string }[];
  image?: { src: string; mobile?: string; alt: string; width: number; height: number; credit: string };
};
export const artifacts: Record<string, ArtifactRecord> = {
  'recall-debt': {
    title: 'Public artifact still pending',
    context: 'The retained manuscript supports this account, but its repository is not public. This review did not verify a public paper or proceedings URL. The diagram above is explanatory; it is not a released experimental artifact.',
    links: []
  },
  'before-you-scale': {
    title: 'Read the version behind the result',
    context: 'The public repository contains an anonymous manuscript titled “When Does Privileged Process Supervision Help?” It includes the transfer null and later format-matched supervision controls. This is a repository manuscript, not a verified proceedings edition.',
    links: [
      {label:'Manuscript · pinned PDF',url:'https://github.com/edward-lcl/feedback-distillation/blob/b80a1d0df7235c72a68c031f6985d747d56f3bca/paper/slfd_colm_er_final.pdf'},
      {label:'Code · reviewed version',url:'https://github.com/edward-lcl/feedback-distillation/tree/b80a1d0df7235c72a68c031f6985d747d56f3bca'}
    ]
  },
  'diagnosing-agent-capabilities': {
    title: 'Inspect the experimental setup',
    context: 'The public repository includes environments, experimental code, and manuscript source. It remains a development record; a plotted result should be tied to its run and version before being treated as a final paper result.',
    links: [
      {label:'Repository · reviewed version',url:'https://github.com/KaaustaaubShankar/BreakingAgentsIntoPOMDP/tree/1b6d85969125c6cf260f0b4e2bb5b0b55eed5c79'},
      {label:'Manuscript source',url:'https://github.com/KaaustaaubShankar/BreakingAgentsIntoPOMDP/blob/1b6d85969125c6cf260f0b4e2bb5b0b55eed5c79/paper.tex'}
    ]
  },
  'factor-ut': {
    title: 'The public paper and its implementation',
    context: 'The arXiv record identifies acceptance at AAAI 2026 TrustAgent. The preprint was submitted on 12 December 2025; the workshop year is a separate date. Figure 3 contains the reported monitoring comparison.',
    links: [
      {label:'Paper · arXiv v1',url:'https://arxiv.org/abs/2512.14745v1'},
      {label:'Results and Figure 3',url:'https://arxiv.org/html/2512.14745v1#S4'},
      {label:'Paper-linked implementation branch',url:'https://github.com/edward-lcl/factor-ut-untrusted-decomposer/tree/AAAI-TrustAgent-submission'}
    ]
  },
  'site-confounds-parkinsons-eeg': {
    title: 'A version boundary worth noticing',
    context: 'The public repository’s older confound figure reports 0.927 segment-level balanced accuracy; this digest follows the retained manuscript’s 0.901 result. These should not be silently combined. The repository is useful for inspecting the workflow, but its older plot is not evidence for the exact value reported here.',
    links: [
      {label:'Code · reviewed version',url:'https://github.com/edward-lcl/sjji-eeg/tree/0fbe8027bc78808aea3553d68cfc565332799963'},
      {label:'Earlier figure · version comparison',url:'https://github.com/edward-lcl/sjji-eeg/blob/0fbe8027bc78808aea3553d68cfc565332799963/paper/figures/fig1_confound.png'}
    ]
  },
  'hidden-cot': {
    title: 'An original robustness figure from the paper',
    context: 'Appendix G splits the 50 GSM8K questions into output-length tiers for each model. The adjusted score is positive in all six groups, but the shortest Instruct group is not statistically significant. These are within-model length tiers, not equally long outputs across models.',
    image: {src:'/artifacts/research/hidden-cot-length-tiers.png',alt:'Original Figure 4: length-adjusted HCDS for Instruct and Thinking in short, medium, and long output tiers. Each tier contains 16 or 17 questions; the short Instruct group is marked non-significant.',width:1868,height:953,credit:'Singh et al., arXiv:2608.29956v1, Figure 4 / Appendix G · original figure, unchanged.'},
    links: [
      {label:'Paper · arXiv v1',url:'https://arxiv.org/abs/2608.29956v1'},
      {label:'Figure and analysis',url:'https://arxiv.org/html/2608.29956v1#A7'},
      {label:'Paper-linked code',url:'https://github.com/a4maan/detecting-hct'}
    ]
  },
  'eval-evidence': {
    title: 'From the project’s own documentation',
    context: 'This source diagram separates the reported outcome, its execution context, and the bytes that can be checked again. It documents the implemented evidence model; it is not an experimental result or a certificate that a score is correct.',
    image: {src:'/artifacts/research/eval-envelope.png',mobile:'/artifacts/research/eval-envelope-mobile.png',alt:'An evidence bundle keeps reported run results, execution context and provenance, and file byte identities separate. Missing evidence remains explicitly unavailable.',width:3200,height:1640,credit:'Eval Evidence project documentation · commit 6d4a25b5f288 · original figure, unchanged.'},
    links: [
      {label:'Original figure and editable source',url:'https://github.com/edward-lcl/eval-evidence/tree/6d4a25b5f288f9646f30e0d1c9f5923cc6c1ec8c/figures'},
      {label:'Run the synthetic walkthrough',url:'/work/eval-evidence-walkthrough/'}
    ]
  },
  'circuit-compass': {title:'What can be inspected publicly',context:'The implementation is not currently public. This page describes the workflow; it does not release collaborator data or establish a biological mechanism.',links:[]},
  'brewery-control-systems': {title:'A case note, with private operating artifacts',context:'Client operating drawings are not published here. The schematic explains my role without reproducing the installation or implying certification.',links:[]},
  'pop2-protein-expression': {title:'The project companion',context:'The public application preserves the shared research interface. Its current image assets are placeholders, so they are not presented here as experimental evidence. It is not a complete release of bench measurements.',links:[{label:'Companion · reviewed version',url:'https://github.com/edward-lcl/UiS-POP2-v2/tree/6b7dc747fad2d3f966e947c86a2deb79e69e166f'}]}
};
