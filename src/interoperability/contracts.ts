export type ArtifactProducer = {
  appId: 'cad-cam-3d' | 'ecad-design' | 'cae-simulation';
  projectId: string;
  projectRevision: string;
};

export type MechanicalFrame = {
  handedness: 'right-handed';
  upAxis: 'z';
  lengthUnit: 'mm';
};

export type EngineeringArtifactEnvelope<T> = {
  contractId: string;
  contractVersion: '1';
  artifactId: string;
  artifactRevision: string;
  producer: ArtifactProducer;
  createdAt: string;
  frame?: MechanicalFrame;
  contentHash?: string;
  payload: T;
};

export type SimulationGeometryPackageV1 = EngineeringArtifactEnvelope<{
  bodies: readonly { id: string; semanticName?: string }[];
  neutralGeometryRef: string;
  semanticSelections: readonly {
    id: string;
    kind: 'face' | 'edge' | 'body';
    sourceLineageIds: readonly string[];
  }[];
}> & { contractId: 'engineering.cad.simulation-geometry-package' };

export type SimulationResultSummaryV1 = EngineeringArtifactEnvelope<{
  studyId: string;
  studyRevision: string;
  sourceGeometryProjectId: string;
  sourceGeometryRevision: string;
  sourceGeometryHash: string;
  analysisType: 'static-linear' | 'thermal' | 'modal';
  solver: { id: string; version: string };
  solveStatus: 'passed' | 'warning' | 'failed';
  convergenceStatus: 'converged' | 'not-converged' | 'not-applicable';
  extrema?: Readonly<Record<string, { value: number; unit: string }>>;
  hotspotReferences?: readonly string[];
}> & { contractId: 'engineering.cae.simulation-result-summary' };
