package screens.advanced;

@:build(bh.multianim.ProgrammableCodeGen.buildAll())
@:keep
class PerfProgrammables extends bh.multianim.ProgrammableBuilder {
	@:manim("public/assets/demos/advanced/macro-performance.manim", "perfSimple")
	public var perfSimple;

	@:manim("public/assets/demos/advanced/macro-performance.manim", "perfComplex")
	public var perfComplex;

	@:manim("public/assets/demos/advanced/macro-performance.manim", "perfRepeatable")
	public var perfRepeatable;
}
